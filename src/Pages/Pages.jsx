
import {Routes, Route} from "react-router-dom";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";
import Home from "../Homepage/Home";
import Payment from "../Payment/Payment";
import Admin from "../admin/AdminInterface";
import AdminLogin from "../Login/AdminLogin";

function Pages() {
    return (
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="SignUp" element={<SignUp/>}/>
        <Route path="Home" element={<Home/>} />
        <Route path="Payment" element={<Payment/>}/>
        <Route path="Admin" element={<Admin/>}/>
        <Route path="AdminLogin" element={<AdminLogin/>}/>
      </Routes>
    );
  }

export default Pages;