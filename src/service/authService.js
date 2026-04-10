const USER_KEY = "users";

export const getUsers = () => {
  return JSON.parse(localStorage.getItem(USER_KEY)) || [];
};

const saveUsers = (users) => {
  localStorage.setItem(USER_KEY, JSON.stringify(users));
};

export const register = (newUser) => {
  const users = getUsers();

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
