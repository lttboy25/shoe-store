import { useState } from "react";
import "./ReviewModal.css";

export default function ReviewModal({ isOpen, onClose, onSubmit, productName }) {
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !comment.trim() || !name.trim() || !email.trim()) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    onSubmit({
      rating,
      title,
      comment,
      name,
      email,
      date: new Date().toLocaleDateString("vi-VN"),
    });

    setRating(5);
    setTitle("");
    setComment("");
    setName("");
    setEmail("");
  };

  if (!isOpen) return null;

  return (
    <div className="review-modal-overlay" onClick={onClose}>
      <div className="review-modal" onClick={(e) => e.stopPropagation()}>
        <div className="review-modal__header">
          <h2 className="review-modal__title">Thêm đánh giá</h2>
          <button className="review-modal__close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="review-modal__content">
          <p className="review-modal__product-name">
            Sản phẩm: <strong>{productName}</strong>
          </p>

          <form onSubmit={handleSubmit}>
            {/* Rating */}
            <div className="review-form__group">
              <label className="review-form__label">Đánh giá: *</label>
              <div className="review-form__rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`review-form__star ${
                      star <= rating ? "review-form__star--active" : ""
                    }`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>
                ))}
                <span className="review-form__rating-text">
                  {rating} / 5 sao
                </span>
              </div>
            </div>

            {/* Title */}
            <div className="review-form__group">
              <label htmlFor="title" className="review-form__label">
                Tiêu đề: *
              </label>
              <input
                id="title"
                type="text"
                className="review-form__input"
                placeholder="Tiêu đề đánh giá..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Comment */}
            <div className="review-form__group">
              <label htmlFor="comment" className="review-form__label">
                Nội dung: *
              </label>
              <textarea
                id="comment"
                className="review-form__textarea"
                placeholder="Chia sẻ trải nghiệm của bạn..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
              />
            </div>

            {/* Name */}
            <div className="review-form__group">
              <label htmlFor="name" className="review-form__label">
                Tên: *
              </label>
              <input
                id="name"
                type="text"
                className="review-form__input"
                placeholder="Tên của bạn"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="review-form__group">
              <label htmlFor="email" className="review-form__label">
                Email: *
              </label>
              <input
                id="email"
                type="email"
                className="review-form__input"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="review-form__actions">
              <button
                type="button"
                className="review-form__btn review-form__btn--cancel"
                onClick={onClose}
              >
                Huỷ
              </button>
              <button
                type="submit"
                className="review-form__btn review-form__btn--submit"
              >
                Gửi đánh giá
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
