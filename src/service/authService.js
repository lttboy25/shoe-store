// ===== KEY lưu trong localStorage =====
const USER_KEY = "users";

// ===== Lấy danh sách user =====
export const getUsers = () => {
  return JSON.parse(localStorage.getItem(USER_KEY)) || [];
};

// ===== Lưu danh sách user =====
const saveUsers = (users) => {
  localStorage.setItem(USER_KEY, JSON.stringify(users));
};

// ===== Đăng ký =====
export const register = (newUser) => {
  const users = getUsers();

  // kiểm tra trùng username
  const isExist = users.find((u) => u.username === newUser.username);
  if (isExist) {
    return {
      success: false,
      message: "Tên đăng nhập đã tồn tại",
    };
  }

  users.push(newUser);
  saveUsers(users);

  return {
    success: true,
    message: "Đăng ký thành công",
  };
};
