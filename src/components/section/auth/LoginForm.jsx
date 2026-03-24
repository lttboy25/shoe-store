import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert("Vui lòng nhập tên đăng nhập");
      return;
    }

    if (!password.trim()) {
      alert("Vui lòng nhập mật khẩu");
      return;
    }

    if (password.length < 6) {
      alert("Mật khẩu phải >= 6 ký tự");
      return;
    }

    alert("Đăng nhập thành công (giả lập)");
  };

  return (
    <MainLayout
      props={
        <div className="container d-flex justify-content-center mt-5">
          <div style={{ width: "600px" }}>
            <h2 className="text-center mb-4 fw-bold">Đăng nhập</h2>

            <div className="bg-light p-4 rounded">
              <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-3">
                  <label className="form-label">Tên đăng nhập</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Button */}
                <button className="btn btn-dark w-100 mb-3">Đăng nhập</button>

                {/* Link đăng ký */}
                <div className="text-center">
                  <span>Chưa có tài khoản? </span>
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => navigate("/register")}
                  >
                    Đăng ký
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default LoginForm;
