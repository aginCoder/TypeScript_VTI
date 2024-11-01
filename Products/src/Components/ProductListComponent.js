import React, { useState, useEffect } from 'react';
import ProductService from '../API/ProductService';
import { Link } from 'react-router-dom';

const ProductListComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts().then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">Product List</h2>
    <div className="mb-3">
        <Link to="/add-product" className="btn btn-primary">Add Product</Link>
    </div>
    <div className="table-responsive">
        <table className="table table-striped table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Description</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price.toLocaleString()} VND</td> {/* Giả sử bạn muốn hiển thị giá dưới dạng tiền tệ */}
                        <td>
                            <Link to={`/update-product/${product.id}`} className="btn btn-info btn-sm me-2">Update</Link>
                            <button className="btn btn-danger btn-sm" onClick={() => 
                                ProductService.deleteProduct(product.id)
                                    .then(() => setProducts(products.filter(p => p.id !== product.id)))
                                    .catch(err => console.error("Delete failed", err)) // Thêm xử lý lỗi
                            }>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>

    );
};

export default ProductListComponent;