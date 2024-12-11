// src/api/userApi.js
import axios from 'axios';

const API_URL = "http://localhost:8080/users";

export const fetchUsers = async (page, searchTerm = '') => {
    try {
        const url = searchTerm === ''
            ? `${API_URL}?page=${page}&size=3`
            : `${API_URL}/search?name=${searchTerm}&page=${page}&size=3`;

        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

// Hàm thêm người dùng mới
export const addUser = async (user) => {
    try {
        await axios.post("http://localhost:8080/user", user);
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

// Hàm chỉnh sửa người dùng
export const updateUser = async (id, user) => {
    try {
        await axios.put(`http://localhost:8080/user/${id}`, user);
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

// Hàm lấy thông tin người dùng
export const getUser = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        return result.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/user/${id}`);
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};



  


