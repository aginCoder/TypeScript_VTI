import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp(props) {
  //Khai báo hook thực hiện việc điều hướng

  let navigate = useNavigate();
  let handleRegister = () => {
    // Lấy dữ liệu
    // Lưu trữ dữ liệu
    // Sau khi thực hiện đăng ký thành công ==> Chuyển tới trang Login?
    navigate("/Login");
  };
  //
  return (
    <div>
      <h2>This is Sigh Up Page</h2>

      {/* Nút đăng ký */}
      <button type="button" class="btn btn-success" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default SignUp;