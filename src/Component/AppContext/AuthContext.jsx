import { createContext, useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Kiểm tra xem có thông tin người dùng lưu trong localStorage không
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (credentials) => {
    // Kiểm tra tài khoản tồn tại
    const userExists = checkUserExists(credentials);

    if (userExists) {
      // Tài khoản tồn tại, thực hiện đăng nhập
      alert("Đăng nhập thành công");
      // Thực hiện các bước đăng nhập tại đây (nếu cần)

      setError(null); // Reset lỗi nếu có
    } else {
      // Tài khoản không tồn tại
      alert(
        "Tài khoản chưa được đăng ký hoặc thông tin đăng nhập không chính xác",
      );
    }
  };
  const checkUserExists = (credentials) => {
    // Kiểm tra xem tài khoản có tồn tại trong localStorage không
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      return (
        parsedUser.email === credentials.email &&
        parsedUser.password === credentials.password
      );
    }
    return false;
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("signIn");
  };
  const register = (userData) => {
    // Thực hiện xử lý đăng ký ở đây, ví dụ: gửi request đăng ký đến server
    setUser(userData);
    const signInSuccess = JSON.parse(localStorage.getItem("signInSuccess"));
    if (signInSuccess == true) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("signIn", JSON.stringify(userData));
    // Sau khi đăng ký thành công, tự động đăng nhập và lưu thông tin người dùng
    register(userData);
  };
  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
