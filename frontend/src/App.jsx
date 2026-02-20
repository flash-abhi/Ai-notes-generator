import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { useEffect } from "react"
import { getCurrentUser } from "./hooks/api"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer } from 'react-toastify';
import Pricing from "./pages/Pricing"
import History from "./pages/History"
import Notes from "./pages/Notes"
import PaymentSuccess from "./pages/PaymentSuccess"
import PaymentFailed from "./pages/PaymentFailed"

export const serverUrl = import.meta.env.BACKEND_URL 
function App() {
  const dispatch = useDispatch();
  const {userData } = useSelector((state) => state.user);
  useEffect(() => {
    getCurrentUser(dispatch);
  },[dispatch]);
  // console.log(userData);
  
  return (
    <>
    <Routes>
      <Route path="/" element={userData ? <Home/>:<Navigate to="/auth" replace/>}/>
      <Route path="/auth" element={userData ? <Navigate to="/" replace/>:<Auth/>}/>
      <Route path="/notes" element={userData ? <Notes/>:<Navigate to="/auth" replace/>}/>
      <Route path="/history" element={userData ?<History/>:<Navigate to="/auth" replace/>}/>
      <Route path="/pricing" element={userData?<Pricing/>:<Navigate to="/auth" replace/>}/>
      <Route path="/payment-success" element={<PaymentSuccess/>}/>
      <Route path="/payment-failed" element={<PaymentFailed/>}/>

    </Routes>
    <ToastContainer/>
    </>

  )
}

export default App
