import React, { useState } from 'react';
import './ProjectForm.css';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectCode, setProjectCode] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [note, setNote] = useState('');
  const [products, setProducts] = useState([{ id: 1, name: 'Sanpham1', code: 'sp2017', quantity: 20 }]);

  const handleAddProduct = () => {
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h5>Tạo Dự Án</h5>
        </div>
        <div className="card-body">
          <form>
          <div className="form-row">
  <div className="form-group col-md-6">
    <label>Tên Dự Án</label>
    <input
      type="text"
      className="form-control"
      placeholder="Nhập Tên Dự Án"
      value={projectName}
      onChange={(e) => setProjectName(e.target.value)}
    />
  </div>
        <div className="form-group col-md-6">
          <label>Mã Dự Án</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập Mã Dự Án"
            value={projectCode}
            onChange={(e) => setProjectCode(e.target.value)}
          />
        </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Ngày Bắt Đầu</label>
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Ngày Kết Thúc</label>
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Tên Khách Hàng</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập Tên Khách Hàng"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Ghi Chú</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ghi Chú"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>
            <h6>Sản Phẩm</h6>
            <div className="form-row">
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên Sản Phẩm"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mã Sản Phẩm"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Số Lượng"
                />
              </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleAddProduct}>
              Thêm
            </button>

            <table className="table mt-4">
              <thead>
                <tr>
                  <th>Mã</th>
                  <th>Tên</th>
                  <th>Số Lượng</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.code}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button className="btn btn-warning btn-sm">Sửa</button>
                      <button className="btn btn-danger btn-sm">Xóa</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" className="btn btn-secondary">Hủy</button>
            <button type="button" className="btn btn-success">Thêm Mới</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
