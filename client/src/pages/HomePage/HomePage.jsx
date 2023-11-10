import CountUp from 'react-countup';
import "./HomePage.css"

function HomePage() {
    return (
      <section>
      <div className='customBanner'>
        <h1 className='customSlogan'>30 AÑOS CONECTANDO EL PUERTO CON TU EMPRESA</h1>        
      </div>
  
      <section className='contadores'>
  
      <article>
      <CountUp start={0} end={1000} duration={2} separator="," className='itemCount' formattingFn={(value) => `+${value}`}/>
      <p className='parrafo'>CONTENEDORES TRANSPORTADOS EN 2022</p>
      </article>
  
      <article>
      <CountUp start={0} end={40} duration={2} separator="," className='itemCount clientesHomePage' formattingFn={(value) => `+${value}`}/>
      <p className='parrafo'>CLIENTES ATENDIDOS</p>
      </article>
  
      <article>
      <CountUp start={0} end={1000} duration={2} separator="," className='itemCount' formattingFn={(value) => `+${value}`}/>
      <p className='parrafo'>CONTENEDORES TRANSPORTADOS EN 2022</p>
      </article>
  
      </section>
  
      
  
      </section>
    )
  }
  
  export default HomePage