import {React } from 'react';

export default function Card1(){
  
    return(
        <section className="card">
        <img src=" https://jamesriverfilm.files.wordpress.com/2014/05/modern-times-chaplin.jpg?w=640&h=360" className="card-img-top" alt="chaplin modern times"/>
        <div className="card-body">
          <h5 className="card-title">Era Dorada</h5>
          <p className="card-text">Clásicos en blanco y negro de la década del 30 hasta la posguerra: Western clásico, Film Noir, Comedias.</p>
          <a href="/" className="btn btn-primary">Ver más</a>
        </div>
        </section>
    );
}
