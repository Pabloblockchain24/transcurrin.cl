
import portacontenedores from "../../assets/portacontenedores.jpg"
import horquillas from "../../assets/horquillas.jpg"
import vacios from "../../assets/GRUAVACIOS.jpg"
import tracto from "../../assets/tracto.jpg"
import ramplaPlana from "../../assets/RAMPLAPLANA.jpg"
import chasis from "../../assets/CHASIS.jpg"
import deposito from "../../assets/deposito.jpg"
import carpas from "../../assets/carpas.jpg"




import "./DepEqu.css";


function DepEqu() {
    return (

        <main className='flex flex-col text-center'>
                 <h1 className='titleDepot'>DEPOSITO Y EQUIPOS</h1>
                 <section className='equiposGrid'>


                 <article className="equiposCard">
                <img
                    src={deposito}
                    alt="Deposito"
                    className="imgFormat"
                />
                <h2 className='nameCard'>DEPOSITO</h2>
                <p className='parrafoCard'> Nuestro depósito de 10,000 m² ofrece amplio espacio para almacenamiento eficiente. 
                El piso tiene tratamiento geomanico garantizando seguridad en las operaciones, además de contar con todas las medidas de seguridad pertinentes</p>
            </article>
            <article className="equiposCard">
                <img
                    src={portacontenedores}
                    alt="Grua portacontenedores"
                    className="imgFormat"
                />
                <h2 className='nameCard'>GRUA PORTACONTENEDORES</h2>
                <p className='p-2'> Grua especializada en operaciones de movimiento de contenedores, diseñada para garantizar eficiencia y 
                seguridad en la manipulación precisa de carga en contextos logísticos variados</p>
            </article>
            <article className="equiposCard">
                <img
                    src={horquillas}
                    alt="Gruas de horquillas"
                    className="imgFormat"
                />
                <h2 className='nameCard'>GRUA HORQUILLA</h2>
                <p className='parrafoCard'> Nuestras grúas de horquillas, con capacidad para levantar hasta 3 toneladas, 
                ofrecen versatilidad y eficiencia en la manipulación de carga, optimizando operaciones logísticas</p>
            </article>
            <article className="equiposCard">
                <img
                    src={vacios}
                    alt="Grua Vacios"
                    className="imgFormat"
                />
                <h2 className='nameCard'>GRUA VACIOS</h2>
                <p className='parrafoCard'> Gruas para la manipulación de unidades vacias dedicadas unicamente a estas operaciones,
                optimizando los tiempos de estadia de los camiones en deposito</p>
            </article>
            <article className="equiposCard">
                <img
                    src={tracto}
                    alt="Tractocamiones"
                    className="imgFormat"
                />
                <h2 className='nameCard'>TRACTOCAMIONES</h2>
                <p className='parrafoCard'> Operamos una flota de tractocamiones en perfectas condiciones, con más de 20 unidades, 
                garantizando eficiencia y confiabilidad en el cumplimiento de nuestros compromisos en tiempo y forma</p>
            </article>



            
            <article className="equiposCard">
                <img
                    src={ramplaPlana}
                    alt="Rampas planas"
                    className="imgFormat"
                />
                <h2 className='nameCard'>RAMPAS PLANAS </h2>
                <p className='p-2'> Rampas planas que permiten tanto el traslado de carga suelta (palletizada) como de contenedores</p>
            </article>
            <article className="equiposCard">
                <img
                    src={chasis}
                    alt="Chasis"
                    className="imgFormat"
                />
                <h2 className='nameCard'>CHASIS</h2>
                <p className='parrafoCard'> Chasis que permiten un uso mas del tonelaje transportado en cada servicio, asi como la posibilidad de trasladar cargas reefer</p>
            </article>
   
            <article className="equiposCard">
                <img
                    src={carpas}
                    alt="Carpas"
                    className="imgFormat"
                />
                <h2 className='nameCard'>CARPAS / ESLINGAS /GPS </h2>
                <p className='parrafoCard'> Cada tractocamion cuenta con carpas y eslingas para asegurar la carga en caso que sea necesario, además de GPS.</p>
            </article>
            </section>
        </main>

    )
}

export default DepEqu