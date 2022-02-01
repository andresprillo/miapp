import {React } from 'react';

export default function Navbar() {    
    return(
    <nav className="navbar navbar-expand-xl navbar-light bg-white" aria-label="navbar Cinevitta">
                    <div className ="container">
                        <img className ="nav-logo" src="img/logo.svg" alt="Logo cinevitta"></img>
                        <h1 className ="titulo-nav">CINEVITTA</h1>
                        <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsAromo" aria-controls="navbarsAromo" aria-expanded="false" aria-label="Toggle navigation">
                            <span className ="navbar-toggler-icon"></span>
                        </button>
                        <div className ="collapse navbar-collapse justify-content-end" id="navbarsAromo">                
                            <ul className ="navbar-nav">
                                <li className ="nav-item">
                                    <a className ="nav-link" href="/">Inicio
    </a>
                                </li>
                                <li className ="nav-item">
                                    <a className ="nav-link" href="/">Hollywood clásico</a>
                                </li>
                                <li className ="nav-item">
                                    <a className ="nav-link" href="/">Europa Universalis</a>
                                </li>
                                <li className ="nav-item">
                                    <a className ="nav-link" href="/">Silente </a>
                                </li>
                                 <li className ="nav-item">
                                    <a className ="nav-link" href="/">Contacto
    </a>
                                </li>
                                  <li className ="nav-item">
                                    <a className ="nav-link" href="/">Catálogo </a>
                                </li>
    
                            </ul>
                        </div>
                </div>
            </nav>
    );  
    }
    