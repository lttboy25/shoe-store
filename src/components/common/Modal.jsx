function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }}
      tabIndex="-1"
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          
          <div className="modal-header">
            {title && <h5 className="modal-title">{title}</h5>}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            />
          </div>

          <div className="modal-body">
            {children}
          </div>

        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
      <form action="">
        <label htmlFor="">{title}</label>
        <input type="text" />
      </form>
    </div>
  );
}

export default Modal;
