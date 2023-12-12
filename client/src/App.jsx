import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/Register/RegisterPage"
import LoginPage from "./pages/LoginPage/LoginPage"


import ServiceFormPage from "./pages/ServiceFormPage";
import HomePage from "./pages/HomePage/HomePage";
import ProtectedRoute from "./ProtectedRoute"
import { IntranetProvider } from "./context/IntranetContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Servicios from "./pages/Servicios/Servicios"
import Nosotros from "./pages/Nosotros/Nosotros"
import Contacto from "./pages/Contacto/Contacto"
import DepEqu from "./pages/DepEqu/DepEqu";
import Clientes from "./pages/Clientes/Clientes"
import Intranet from "./pages/Intranet/Intranet";
import ScrollToTop from './components/ScrollToTop';

import IntranetStock from "./pages/PagesIntranet/IntranetStock/IntranetStock";
import IntranetProgramacion from "./pages/PagesIntranet/IntranetProgramacion/IntranetProgramacion";
import IntranetStatus from "./pages/PagesIntranet/IntranetStatus/IntranetStatus";
import IntranetFacturacion from "./pages/PagesIntranet/IntranetFacturacion/IntranetFacturacion";


function App() {

  return (
    <AuthProvider>
      <IntranetProvider>
        <BrowserRouter>
        <ScrollToTop />

          <Navbar/>
          <hr />

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
              <Route path="/intranet/stock" element={<IntranetStock />} />
              <Route path="/intranet/programacion" element={<IntranetProgramacion />} />
              <Route path="/intranet/status" element={<IntranetStatus />} />
              <Route path="/intranet/facturacion" element={<IntranetFacturacion />} />

              
              {/* <Route path="/intranet/:id" element={<ServiceFormPage />} /> */}
            </Route>
          
          </Routes>
          
          <Footer />
        </BrowserRouter>
      </IntranetProvider>
    </AuthProvider>
  )
}

export default App


