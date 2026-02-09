import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin?.(username, password);
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div style={{ width: "600px" }}>
        <h2 className="text-center mb-4 fw-bold">Đăng nhập</h2>

        <div className="bg-light p-4 rounded">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-start d-block">
                Tên đăng nhập
              </label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-start d-block">Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-dark" type="submit">
                Đăng nhập
              </button>
              <a href="#" className="text-decoration-none">
                Quên mật khẩu?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
