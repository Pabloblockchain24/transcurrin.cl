import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage/LoginPage"


import ServicePage from "./pages/ServicePage";
import ServiceFormPage from "./pages/ServiceFormPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute"
import { IntranetProvider } from "./context/IntranetContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

import Servicios from "./pages/Servicios/Servicios"
import Nosotros from "./pages/Nosotros/Nosotros"
import Contacto from "./pages/Contacto/Contacto"
import DepEqu from "./pages/DepEqu/DepEqu";
import Clientes from "./pages/Clientes/Clientes"
import Intranet from "./pages/Intranet/Intranet";

function App() {
  return (
    <AuthProvider>
      <IntranetProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/categoria/SERVICIOS" element={<Servicios />} />
            <Route path="/categoria/NOSOTROS" element={<Nosotros />} />
            <Route path="/categoria/CONTACTO" element={<Contacto />} />
            <Route path="/categoria/DEPOSITOEQUIPOS" element={<DepEqu />} />
            <Route path="/categoria/CLIENTES" element={<Clientes />} />


            
            <Route element={<ProtectedRoute />}>
              <Route path="/intranet" element={<Intranet />} />
              <Route path="/add-service" element={<ServiceFormPage />} />
              <Route path="/intranet/:id" element={<ServiceFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          
          </Routes>
          
          <Footer />
        </BrowserRouter>
      </IntranetProvider>
    </AuthProvider>
  )
}

export default App


