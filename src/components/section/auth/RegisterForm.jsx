import React, { useState } from "react";

function RegisterForm({ onRegister }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Mật khẩu nhập lại không khớp");
      return;
    }

    onRegister?.({
      username,
      email,
      password,
    });
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div style={{ width: "600px" }}>
        <h2 className="text-center mb-4 fw-bold">Đăng ký</h2>

        <div className="bg-light p-4 rounded">
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-3">
              <label className="form-label text-start d-block">
                Tên đăng nhập
              </label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label text-start d-block">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label text-start d-block">Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="form-label text-start d-block">
                Nhập lại mật khẩu
              </label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Actions */}
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-dark" type="submit">
                Đăng ký
              </button>
              <a href="#" className="text-decoration-none">
                Đã có tài khoản?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
