import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StatesProvider from './Context/StatesProvider';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Gallery from './pages/gallery';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Cement from './pages/cement';
import Paint from './pages/paint';
import Industry from './pages/industry';
import Dashboard from './pages/user/Dashboard';
import PrivateRoutes from './components/Routes/Private';
import AdminRoutes from './components/Routes/AdminRotes';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Products';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>
      <StatesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/category/:slug" element={<CategoryProduct />} />
            <Route path="/product/:slug" element={<ProductDetails/>} />
            <Route path="/dashboard" element={<PrivateRoutes />} >
              <Route path='user' element={<Dashboard />} />
              <Route path='user/orders' element={<Orders />} />
              <Route path='user/profile' element={<Profile />} />
            </Route>
            <Route path="/dashboard" element={<AdminRoutes />} >
              <Route path='admin' element={<AdminDashboard />} />
              <Route path='admin/create-category' element={<CreateCategory />} />
              <Route path='admin/create-product' element={<CreateProduct />} />
              <Route path='admin/products' element={<Products />} />
              <Route path="admin/product/:slug" element={<UpdateProduct />} />
              <Route path='admin/users' element={<Users />} />
            </Route>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/*" element={<Pagenotfound />} />
            {/* <Route path="/cement" element={<Cement />} />
            <Route path="/paint" element={<Paint />} />
            <Route path="/industry" element={<Industry />} /> */}
          </Routes>
        </Router>
      </StatesProvider>
    </>
  );
}

export default App;
