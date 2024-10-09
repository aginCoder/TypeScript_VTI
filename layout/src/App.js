import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const images = [
    "/image/BA.png",
    "/image/Tester.png",
    "/image/Test.png"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header>
        <div className="sidebar">
          <ul>
            <li>CS Hoàng Cầu: 0865.359.388</li>
            <li>CS Sông Đà: 0865.359.388</li>
            <li>CS HCM: 0978.067.066</li>
            <li>CS Duy Tân: 0866.805.563</li>
            <li>CS Mễ Trì: 0866.805.563</li>
            <li>CS Đà Nẵng: 0968.834.386</li>
          </ul>
        </div>
        <div className="icons">
          <img src="image/tiktok.png" alt="Tiktok" />
          <img src="image/fb.png" alt="Facebook" />
          <img src="image/yt.png" alt="YouTube" />
        </div>
      </header>
      <menu>
        <div className="logo">
          <img src="/image/academy.png" alt="Logo" />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </menu>
      <div className="slider-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <section>
        <div className="container">
          <div className="left-column">
            <h2>Welcome to VTI Academy</h2>
            <p>VTI Academy là đơn vị đào tạo Công nghệ thông tin, trực thuộc tập đoàn công nghệ VTI với hệ sinh thái dịch vụ đa dạng, có trụ sở ở cả Việt Nam, Nhật Bản và Hàn Quốc. 
              VTI Academy hiện đang là một trong những đơn vị uy tín hàng đầu về đào tạo các khóa học liên quan đến IT hiện nay.</p>
            <img src="/image/banner.jpg" alt="Banner" />
          </div>
          <div className="right-column">
            <h2>Latest News</h2>
            <p>Bí quyết trở thành lập trình viên ngay từ khi còn ngồi trên ghế nhà trường!</p>
            <img src="/image/DV.jpg" alt="Latest News" />
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright © 2021 VTI ACADEMY</p>
      </footer>
    </div>
  );
}

export default App;
