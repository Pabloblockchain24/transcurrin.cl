import React from "react";
import "./Footer.css";
import { NavLink } from 'react-router-dom'
import logoFooter from "../../assets/logoFooter.png"

function Footer() {
  return (
    <footer className="FooterMain">
        <section className="FooterLogo">
          <img src={logoFooter} alt="Logo Transcurrin"/>
        </section>


        <section className="FooterCentro">
          <article className="FooterArticle">
            <h2 className="FooterTitle">CONTACTO</h2>
            <p className="FooterDescription"> +569 5072 7028</p>
          </article>


          <article className="FooterArticle">
            <h2 className="FooterTitle">DEPOSITO Y OPERACIONES</h2>
            <p className="FooterDescription">LAS ACACIAS 315 AGUAS BUENAS , SAN ANTONIO</p>
          </article>
          <article className="FooterArticle">
            <h2 className="FooterTitle">OFICINA COMERCIAL </h2>
            <p className="FooterDescription">BLANCO ENCALADA #750, SAN ANTONIO</p>
          </article>

          <hr className="FooterLine" />
            <div className="FooterCentroBottom">©transcurrin.cl All rigths reserved</div>
        </section>

        <section className="FooterEnd">
          <article className="FooterEndContact">
            <h2 className="FooterTitle">MAIL CONTACTO</h2>
            <p className="FooterDescription"> parce@transcurrin.cl</p>
            <p className="FooterDescription"> contacto@transcurrin.cl</p>
          </article>

          <article className="FooterButtonContact">
            <NavLink to={"/categoria/CONTACTO"} className="FooterLinkContact"> OBTEN TU COTIZACIÓN HOY </NavLink>
          </article>
          <p className="FooterButtonMensaje"> ¡ Solo válido para días hábiles !</p>


        </section>
    </footer>
  );
}

export default Footer;
