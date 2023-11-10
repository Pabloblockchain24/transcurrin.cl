import React from "react";
import "./Footer.css";
import { NavLink } from 'react-router-dom'
import logoFooter from "../../assets/logoFooter.png"

function Footer() {
  return (
    <div className="flex flex-col">
      <section className="footerTop">
        <footer className="flex flex-col items-center">
          <img
            src={logoFooter}
            alt="logo tienda"
            className="w-3/5"
          />
        </footer>
        <section className="footer">
          <article className="customArticle">
            <h6>CONTACTO</h6>
            <p className="customP"> +569 5072 7028</p>
          </article>
          <article className="customArticle">
            <h6>DEPOSITO Y OPERACIONES</h6>
            <p className="customP">LAS ACACIAS 315 AGUAS BUENAS , SAN ANTONIO</p>
          </article>
          <article className="customArticle">
            <h6>OFICINA COMERCIAL </h6>
            <p className="customP">BLANCO ENCALADA #750, SAN ANTONIO</p>
          </article>
          <hr className="footerLine" />
          <div className="footerBottom">
            <p>©transcurrin.cl All rigths reserved</p>
          </div>
        </section>
        <section className="section footer">
          <article className="customArticle2">
            <h6>MAIL CONTACTO</h6>
            <p className="customP"> parce@transcurrin.cl</p>
            <p className="customP"> contacto@transcurrin.cl</p>
          </article>
          <article className="customCotizacion">
            <NavLink to={"/categoria/CONTACTO"} className="customButtonCotizacion"> OBTEN TU COTIZACIÓN HOY </NavLink>

            <p className="customP"> ¡ Solo válido para días hábiles !</p>
          </article>
        </section>
      </section>
    </div>
  );
}

export default Footer;
