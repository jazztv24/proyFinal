import './principal.css'
import './global.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Cartas from './Cartas'
import Modal1 from './Modal1'
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import Modal4 from './Modal4'
import Modal5 from './Modal5'


function Inicio(props)
{
    return(
        <div className='conteInicio'>
            <br></br>
            <h1>Principales Actores</h1>
            <br></br>
            <Cartas></Cartas>
        </div>
    );
}


function Peliculas(props)
{
    return(
        <div className='conteInicio'>
        <h1>RESUMENES</h1>
        <div className="botones">
        <Modal1></Modal1>
        <Modal2></Modal2>
        <Modal3></Modal3>
        <Modal4></Modal4>
        <Modal5></Modal5>
        </div>
        </div>
    );
}

function Principal(props)
{
    return(
        <div className="caja">
            <div className="contenido">
                    <div className="titulo">CINEMATICA BOLIVIANA</div>
                    <div className="navbar">
                        <ul className='lista'>
                             <li><Link to='/'>  <img src="../public/logoBolivia.png" alt="" className='imglogo'/></Link></li>
                            <li><Link to='/'>Principal</Link></li>
                            <li><Link to='/pag1'>Peliculas</Link></li>
                        </ul>
                    </div>
                    <div className="cuerpo">
                        <Routes>
                             <Route path="/" element={<Inicio></Inicio>}></Route>
                             <Route path="/pag1" element={<Peliculas></Peliculas>}></Route>
                     </Routes>

                    </div>
            </div>

            <div className="footer">
                <h4>Tarifa Vargas Jazer Esteban</h4>
                <h4>Programacion WEB</h4>
            </div>
        </div>
    );
}
export default Principal;