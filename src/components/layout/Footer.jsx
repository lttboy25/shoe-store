// src/components/layout/Footer.jsx
import React from "react";

// --- IMPORT GIỮ NGUYÊN ---
import addressIcon from "../../assets/icon/address.svg";
import phoneIcon from "../../assets/icon/phone.svg";
import mailIcon from "../../assets/icon/mail.svg";
import baohanhIcon from "../../assets/icon/baohanh.svg";
import doitraIcon from "../../assets/icon/doitra.svg";
import questionIcon from "../../assets/icon/Question.svg";
import fbIcon from "../../assets/icon/FB.svg";
import igIcon from "../../assets/icon/IG.svg";
import tiktokIcon from "../../assets/icon/TikTok.svg";
import logoABC from "../../assets/icon/LogoABC.svg";

const Footer = () => {
  const iconStyle = {
    filter: "brightness(0) invert(1)",
    width: "24px",
    height: "24px",
    objectFit: "contain",
  };

  const socialIconStyle = {
    filter: "brightness(0) invert(1)",
    width: "38px",
    height: "38px",
    objectFit: "contain",
    cursor: "pointer",
  };

  // 1. Giảm mb-3 xuống mb-2 cho tiêu đề sát xuống nội dung hơn
  const titleClass = "fw-bold fs-4 text-uppercase mb-2 text-start text-nowrap";

  return (
    <footer
      style={{
        backgroundColor: "#4a4a4a",
        color: "white",
        paddingTop: "40px",
        // 2. Giảm padding đáy từ 20px xuống 10px
        paddingBottom: "10px",
        minWidth:"100%"
      }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* --- CỘT 1: LIÊN HỆ --- */}
          <div className="col-lg-4 col-md-6 d-flex justify-content-lg-center">
            <div>
              <h5 className={titleClass}>LIÊN HỆ</h5>

              {/* 3. THAY ĐỔI QUAN TRỌNG: mb-2 -> mb-1 (Ép dòng sát nhau) */}
              <div className="d-flex mb-1 align-items-start">
                <div className="me-3 mt-1">
                  <img src={addressIcon} alt="Address" style={iconStyle} />
                </div>
                <span className="text-start">
                  Số 12 Nguyễn Văn Bảo, P. Hạnh Thông,
                  <br />
                  Thành phố Hồ Chí Minh
                </span>
              </div>

              <div className="d-flex mb-1 align-items-center">
                <div className="me-3">
                  <img src={phoneIcon} alt="Phone" style={iconStyle} />
                </div>
                <span>0935 123 456</span>
              </div>

              <div className="d-flex mb-1 align-items-center">
                <div className="me-3">
                  <img src={mailIcon} alt="Mail" style={iconStyle} />
                </div>
                <span>abcshoe@support.com</span>
              </div>
            </div>
          </div>

          {/* --- CỘT 2: HỖ TRỢ KHÁCH HÀNG --- */}
          <div className="col-lg-4 col-md-6 d-flex justify-content-lg-center">
            <div>
              <h5 className={titleClass}>HỖ TRỢ KHÁCH HÀNG</h5>

              {/* 3. mb-2 -> mb-1 */}
              <div className="d-flex mb-1 align-items-center">
                <div className="me-3">
                  <img src={baohanhIcon} alt="Bảo hành" style={iconStyle} />
                </div>
                <a href="#" className="text-white text-decoration-none">
                  Chính sách bảo hành
                </a>
              </div>

              <div className="d-flex mb-1 align-items-center">
                <div className="me-3">
                  <img src={doitraIcon} alt="Đổi trả" style={iconStyle} />
                </div>
                <a href="#" className="text-white text-decoration-none">
                  Chính sách đổi trả
                </a>
              </div>

              <div className="d-flex mb-1 align-items-center">
                <div className="me-3">
                  <img src={questionIcon} alt="FAQ" style={iconStyle} />
                </div>
                <a href="#" className="text-white text-decoration-none">
                  Câu hỏi thường gặp
                </a>
              </div>
            </div>
          </div>

          {/* --- CỘT 3: SOCIAL --- */}
          <div className="col-lg-4 col-md-12 d-flex justify-content-lg-center">
            <div style={{ minWidth: "260px" }}>
              <h5 className={titleClass}>SOCIAL</h5>

              {/* Giảm khoảng cách dưới icon social (mb-3 -> mb-2) */}
              <div className="d-flex gap-3 mb-2">
                <img src={fbIcon} alt="Facebook" style={socialIconStyle} />
                <img src={igIcon} alt="Instagram" style={socialIconStyle} />
                <img src={tiktokIcon} alt="TikTok" style={socialIconStyle} />
              </div>

              <div className="text-start">
                <img src={logoABC} alt="ABC Logo" style={{ width: "150px" }} />
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        {/* 4. KEY CHANGE: pt-3 mt-3 -> pt-2 mt-2 (Kéo dòng kẻ lên sát logo nhất có thể) */}
        <div className="border-top border-secondary pt-2 mt-2 text-center">
          <p className="mb-0 opacity-75 fw-bold small">
            Copyright © 2026 ABC Shoe. Powered by 17Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
