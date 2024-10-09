import React, { useState } from 'react';

function ProjectForm() {
  const [project, setProject] = useState({
    projectName: '',
    projectCode: '',
    customerName: '',
    startDate: '',
    endDate: '',
    notes: ''
  });
  const [product, setProduct] = useState({ name: '', code: '', quantity: 0 });
  const [productList, setProductList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const addProduct = () => {
    if (editingIndex !== null) {
      const updatedProducts = [...productList];
      updatedProducts[editingIndex] = product;
      setProductList(updatedProducts);
      setEditingIndex(null); 
    } else {
      setProductList([...productList, product]);
    }
    setProduct({ name: '', code: '', quantity: 0 });
  };

  const editProduct = (index) => {
    setProduct(productList[index]);
    setEditingIndex(index); 
  };

  const deleteProduct = (index) => {
    const updatedList = productList.filter((_, i) => i !== index);
    setProductList(updatedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Submitted:', project, productList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Tạo Dự Án</h3>

      {/* Tạo dự án */}
      <div className="form-section">
        <div className="form-column">
          <label>Tên Dự Án</label>
          <input
            type="text"
            name="projectName"
            value={project.projectName}
            onChange={handleInputChange}
            placeholder="Nhập Tên Dự Án"
          />

          <label>Tên Khách Hàng</label>
          <input
            type="text"
            name="customerName"
            value={project.customerName}
            onChange={handleInputChange}
            placeholder="Nhập Tên Khách Hàng"
          />

          <label>Ngày Bắt Đầu</label>
          <input
            type="date"
            name="startDate"
            value={project.startDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-column">
          <label>Mã Dự Án</label>
          <input
            type="text"
            name="projectCode"
            value={project.projectCode}
            onChange={handleInputChange}
            placeholder="Nhập Mã Dự Án"
          />

          <label>Ghi Chú</label>
          <input
            type="text"
            name="notes"
            value={project.notes}
            onChange={handleInputChange}
            placeholder="Ghi Chú"
          />

          <label>Ngày Kết Thúc</label>
          <input
            type="date"
            name="endDate"
            value={project.endDate}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Sản phẩm */}
      <div className="form-group">
        <h4>Sản Phẩm</h4>
        <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleProductChange}
            placeholder="Tên Sản Phẩm"
        />
        <input
            type="text"
            name="code"
            value={product.code}
            onChange={handleProductChange}
            placeholder="Mã"
        />
        <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleProductChange}
            placeholder="Số Lượng"
        />
        <br />
        <button type="button" onClick={addProduct}>
          {editingIndex !== null ? 'Lưu' : 'Thêm'}
        </button>
      </div>

      {}
      <table>
        <thead>
          <tr>
            <th>MÃ</th>
            <th>TÊN</th>
            <th>Số Lượng</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button type="button" onClick={() => editProduct(index)}>Sửa</button>
                <button type="button" onClick={() => deleteProduct(index)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {}
      <button type="button">Hủy</button>
      <button type="submit">Thêm Mới</button>
    </form>
  );
}

export default ProjectForm;
