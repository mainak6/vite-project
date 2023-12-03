import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import VocalforLocal  from "./company/VocalforLocal/VocalforLocal";
import Upload from './company/Upload/Upload';
import Faqs from "./company/Faqs/Faqs"
import CarrierWithUs from './company/CarrierWithUs/CarrierWithUs';
import PrivacyPolicy from "./company/PrivacyPolicy/PrivacyPolicy"
import TermsOfService from './company/TermsOfService/TermsOfService';
import AboutUs from './company/AboutUs/AboutUs';
import Team from './company/Team/Team';
import ContactUs from './company/ContactUs/ContactUs';
import Blog from './company/Blog/Blog';
import RefundPolicy from './company/RefundPolicy/RefundPolicy';
import ReturnPolicy from "./company/ReturnPolicy/ReturnPolicy";
import CancellationRequest from './company/CancellationRequest/CancellationRequest';
import TrackReturn from './company/TrackReturn/TrackReturn';
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />

          <Route
            path="/upload"
            element={
              <ProtectedRouteForAdmin>
                <Upload />
              </ProtectedRouteForAdmin>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
            }
          />

          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms_of_service" element={<TermsOfService />} />
          <Route path="/faqs" element={<Faqs />} />

          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/vocalforlocal" element={<VocalforLocal />} />
          <Route path="/carrier_with_us" element={<CarrierWithUs />} />

          <Route path="/refund_policy" element={<RefundPolicy />} />
          <Route path="/return_policy" element={<ReturnPolicy />} />
          <Route path="/cancellation_request" element={<CancellationRequest />} />
          <Route path="/track_return" element={<TrackReturn />} />

          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App 

// user 

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'mainak@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}