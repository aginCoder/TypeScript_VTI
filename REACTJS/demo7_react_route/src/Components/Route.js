import Home from '../Page/Home';
import About from '../Page/About'; 
import AccountManagement from '../Page/AccountManagement'; 
import DepartmentManagement from '../Page/DepartmentManagement'; 
import Login from '../Page/Login'; 
import SignUp from '../Page/Signup'; 
import { Routes, Route } from 'react-router-dom'; 

function AppRoutes() { 
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/AccountManagement" element={<AccountManagement />} />
        <Route path="/DepartmentManagement" element={<DepartmentManagement />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default AppRoutes; 
