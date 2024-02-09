import React, { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CountUp from 'react-countup';
import transparencia from "../../assets/TRANSPARENCIA.jpg"
import responsabilidad from "../../assets/RESPONSABILIDAD.jpg"
import disponibilidad from "../../assets/DISPONIBIIDAD.jpg"
import "./HomePage.css"


import { NavLink } from "react-router-dom"


function HomePage() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  }
  const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6648.896407065845!2d-71.56854969521515!3d-33.567717428254156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662475ce1f7c805%3A0x8e55b0b74dd1bcfa!2sFuenzalida%20Almacen%20de%20Contenedores%20Ltda!5e0!3m2!1ses!2scl!4v1702121617751!5m2!1ses!2scl";

  return (
    <>
      <Slider {...settings}>
        <div className='Banner1'>
          <div className='BannerSection'>
            <h1 className='BannerTitle1' >SOLUCIONES LOGISTICAS A TU MEDIDA</h1>
            <h2 className='BannerTitle2'> Nos adaptamos a tus necesidades </h2>
            <NavLink to="/categoria/CONTACTO" className="buttonBanner"> CONTACTANOS AQUI </NavLink>
          </div>
        </div>

        <div className='Banner2'>
          <div className='BannerSection'>
            <h1 className='BannerTitle1' >EXPERIENCIA A TU SERVICIO</h1>
            <h2 className='BannerTitle2'> 35 años de operación nos respaldan </h2>
            <NavLink to="/categoria/CONTACTO" className="buttonBanner"> CONTACTANOS AQUI </NavLink>
          </div>
        </div>

        <div className='Banner3'>
          <div className='BannerSection'>
            <h1 className='BannerTitle1' >CENTRATE EN TU NEGOCIO PRINCIPAL</h1>
            <h2 className='BannerTitle2'> Despreocupate de la logistica de tu carga</h2>
            <NavLink to="/categoria/CONTACTO" className="buttonBanner"> CONTACTANOS AQUI </NavLink>
          </div>
        </div>
      </Slider>
      <hr className='LineHr' />

      <section className='Statistics'>
        <section className='SectionMain'>
          <h1 className='TitleSection'>2022 EN NÚMEROS</h1>
          <section className='StaticsCounters'>
            <article className='Counter'>
              <CountUp start={0} end={1500} duration={10} separator="," className='CounterItem' formattingFn={(value) => `+${value}`} />
              <p className='CounterTitle'>SERVICIOS REALIZADOS</p>
              <p className='CounterDescription'>En todas sus modalidades, servicio de unidades full, desconsolidados, consolidados, etc.</p>
            </article>

            <article className='Counter'>
              <CountUp start={0} end={25} duration={10} separator="," className='CounterItem' formattingFn={(value) => `+${value}`} />
              <p className='CounterTitle'>CAMIONES EN NUESTRA FLOTA</p>
              <p className='CounterDescription'>Durante 2022 y a pesar de una baja considerable en el movimiento de carga respecto a 2021, mantuvimos una flota de +25 camiones disponibles para nuestros clientes.</p>

            </article>

            <article className='Counter'>
              <CountUp start={0} end={90} duration={10} separator="," className='CounterItem' formattingFn={(value) => `${value}%`} />
              <p className='CounterTitle'> PUNTUALIDAD PRESENTACION</p>
              <p className='CounterDescription'>Logramos presentarnos al menos 15 minutos antes del horario de presentación, en más del 90% de nuestros servicios en 2022</p>

            </article>

            <article className='Counter'>
              <CountUp start={0} end={35} duration={10} separator="," className='CounterItem' formattingFn={(value) => `+${value}`} />
              <p className='CounterTitle'>AÑOS DE EXPERIENCIA</p>
              <p className='CounterDescription'>En 2022 cumplimos 35 años conectando el puerto de san antonio con las distintas empresas del pais</p>

            </article>

          </section>

        </section>

      </section>
      <hr className='LineHr' />

      <section className='Commitment'>
        <section className='SectionMain'>
          <h1 className='TitleSection'>COMPROMISO CON NUESTROS CLIENTES</h1>
          <section className='CommitmentArticles'>

            <article className='CommitmentArticle'>
              <img src={transparencia} alt="" className='CommitmentImg' />
              <h2 className='CommitmentTitle'>TRANSPARENCIA</h2>
              <p className='CommitmentDescription'> En todo momento podras conocer el estado de tu servicio a traves de nuestra intranet, tiempos de salida y llegada, operadores a cargo, tarifas, etc.</p>
            </article>

            <article className='CommitmentArticle'>
              <img src={responsabilidad} alt="" className='CommitmentImg' />
              <h2 className='CommitmentTitle'>RESPONSABILIDAD</h2>
              <p className='CommitmentDescription'>En todo momento podras conocer el estado de tu servicio a traves de nuestra intranet, tiempos de salida y llegada, operadores a cargo, tarifas, etc.</p>
            </article>

            <article className='CommitmentArticle'>
              <img src={disponibilidad} alt="" className='CommitmentImg' />
              <h2 className='CommitmentTitle'>DISPONIBILIDAD</h2>
              <p className='CommitmentDescription'>En todo momento podras conocer el estado de tu servicio a traves de nuestra intranet, tiempos de salida y llegada, operadores a cargo, tarifas, etc.</p>
            </article>
          </section>
        </section>
      </section>
      <hr className='LineHr' />

      <section className='Map'>
        <h1 className='TitleSection'>DONDE ESTAMOS</h1>
        <iframe
          title="Google Maps"
          width="600"
          height="450"
          src={mapURL}
          style={{ border: 2 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className='MapCustom'
        ></iframe>
      </section>
    </>
  )
}

export default HomePage