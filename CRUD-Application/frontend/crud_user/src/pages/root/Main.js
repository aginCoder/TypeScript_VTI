import React from "react";

const Main = () => {
    return (
        <header className="bg-white text-center py-3">
            {/* <h2 className="bg-primary text-white py-2">VTI Academy</h2> */}
            <main>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                        TẦM <span className="text-muted">NHÌN</span>
                        </h2>
                        <p className="lead">Với tầm nhìn sẽ trở thành học viện đào tạo hàng đầu cho sinh viên và các đối tác. 
                            Chúng tôi luôn đi đầu áp dụng công nghệ hiện đại, phương pháp đào tạo đa dạng cho từng khách hàng. 
                            Lấy tri thức là nền tảng cho sự phát triển bền vững chúng tôi luôn luôn thay đổi nội dung đáp ứng nhanh nhất nhu cầu doanh nghiệp trong nước và quốc tế.</p>
                    </div>
                    <div className="col-md-5">
                        <img
                            src="https://vtiacademy.edu.vn/upload/images/gioi-thieu/149366131-2914002822253322-6084218597631765228-o.jpg"
                            alt="VTI Academy"
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500"
                            height="500"
                        />
                    </div>
                </div>
                <hr className="featurette-divider" />

                <div className="container marketing">
                <h2>Huấn luyện viên</h2>
                Tại VTI Academy, 100% Mentor là chuyên gia trong ngành với kinh nghiệm từ 3 năm trở lên
                    <div className="row">
                        <div className="col-lg-4">
                            <img
                                src="https://vtiacademy.edu.vn/upload/images/nguyen-vinh-hien.png"
                                className="img-small"
                                alt="Nguyễn Vinh Hiển"
                            />
                            <h2>Nguyễn Vinh Hiển</h2>
                            <p>
                                Kinh nghiệm: 10+ năm kinh nghiệm trong ngành CNTT<br />
                                Vị trí hiện tại: STC Group - PM
                            </p>
                            <p>
                                <a className="btn btn-secondary" href="#">
                                    Xem chi tiết &raquo;
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <img
                                src="https://vtiacademy.edu.vn/upload/images/nga-ba.png"
                                className="img-small"
                                alt="Đỗ Thị Ngà"
                            />
                            <h2>Đỗ Thị Ngà</h2>
                            <p>
                            Kinh nghiệm: 14+ năm kinh nghiệm trong ngành CNTT<br />
                            Vị trí hiện tại: Business Analyst - VIETTEL SOFTWARE SERVICES
                            </p>
                            <p>
                                <a className="btn btn-secondary" href="#">
                                    Xem chi tiết &raquo;
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <img
                                src="https://vtiacademy.edu.vn/upload/images/nguyen-quoc-cuong.png"
                                className="img-small"
                                alt="Nguyễn Quốc Cường"
                            />
                            <h2>Nguyễn Quốc Cường</h2>
                            <p>
                            Kinh nghiệm: 3+ năm kinh nghiệm trong ngành CNTT<br />
                            Vị trí hiện tại: Samsung Vietnam Mobile RnD Center- Engineer
                            </p>
                            <p>
                                <a className="btn btn-secondary" href="#">
                                    Xem chi tiết &raquo;
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">
                            SỨ <span className="text-muted">MỆNH</span>
                        </h2>
                        <p className="lead">Chúng tôi cung cấp các giải pháp đào tạo và phát triển nguồn nhân lực chất lượng cao cho thị trường công nghệ thông tin trong nước và quốc tế.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img
                            src="https://vtiacademy.edu.vn/upload/images/278996189-733602468010156-1412391785179953791-n.jpg"
                            alt="VTI Academy"
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500"
                            height="500"
                        />
                    </div>
                </div>
            </main>
        </header>
    );
};

export default Main;
