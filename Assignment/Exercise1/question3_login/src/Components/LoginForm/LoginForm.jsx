// Import React library để sử dụng các thành phần của React
import React from "react";

// Import file CSS để áp dụng style cho LoginForm
import './LoginForm.css';

// Import icon FaUser và FaLock từ thư viện react-icons
import { FaUser, FaLock } from "react-icons/fa";

// Tạo component LoginForm
const LoginForm = () => {
    return (
        // Bao bọc toàn bộ form trong một div với class 'wrapper' để áp dụng style
        <div className="wrapper">
            {/* Form đăng nhập, action="" có nghĩa là form sẽ submit tại cùng trang */}
            <form action="">
                {/* Tiêu đề của form */}
                <h1>Login</h1>

                {/* Div chứa input cho Username */}
                <div className="input-box">
                    {/* Ô input cho tên đăng nhập (Username), bắt buộc phải nhập */}
                    <input type="text" placeholder="Username" required />
                    {/* Icon FaUser hiển thị kế bên ô nhập Username */}
                    <FaUser className="icon"/>
                </div>

                {/* Div chứa input cho Password */}
                <div className="input-box">
                    {/* Ô input cho mật khẩu (Password), bắt buộc phải nhập */}
                    <input type="password" placeholder="Password" required />
                    {/* Icon FaLock hiển thị kế bên ô nhập Password */}
                    <FaLock className="icon"/>
                </div>

                {/* Div chứa checkbox "Remember me" và liên kết "Forgot Password" */}
                <div className="remember-Forgot">
                    {/* Checkbox để chọn "Remember me" */}
                    <label><input type="checkbox" />Remember me</label>
                    {/* Liên kết tới trang quên mật khẩu */}
                    <a href="#">Forgot Password</a>
                </div>
                
                {/* Nút submit để gửi form */}
                <button type="submit">Login</button>

                {/* Div chứa liên kết tới trang đăng ký */}
                <div className="register-link">
                    {/* Câu hỏi người dùng chưa có tài khoản và liên kết tới trang đăng ký */}
                    <p>Don't have an Account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

// Xuất component LoginForm để có thể sử dụng ở những nơi khác
export default LoginForm;
