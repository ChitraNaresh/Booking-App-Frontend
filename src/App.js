import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "antd";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import Notifications from "./pages/Notifications";
import UsersList from "./pages/Admin/UsersList";
import DoctorsList from "./pages/Admin/DoctorsList";
import DoctorProfile from "./pages/Doctor/DoctorProfile";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const {loading}=useSelector(store=>store.alerts)
  const renderLoader=()=>{
    return <div className="spinner-parent">
    <div class="spinner-border" role="status"></div>
    </div>
  }
  console.log(loading)
  return (
    <BrowserRouter>
      {loading && <div className="spinner-parent">
    <div class="spinner-border" role="status"></div>
    </div>}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/apply-doctor" element={<ProtectedRoute><ApplyDoctor/></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notifications/></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><UsersList/></ProtectedRoute>} />
        <Route path="/doctors" element={<ProtectedRoute><DoctorsList/></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>} />
        <Route path="/doctors/profile/:userId" element={<ProtectedRoute><DoctorProfile/></ProtectedRoute>} />
        <Route path="/book-appointment/:doctorId" element={<ProtectedRoute><BookAppointment/></ProtectedRoute>} />
        <Route path="/appointments" element={<ProtectedRoute><Appointments/></ProtectedRoute>} />
        <Route path="/doctor/appointments" element={<ProtectedRoute><DoctorAppointments/></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
