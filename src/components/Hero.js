import { React } from 'react';
import LazyHero from 'react-lazy-hero';

 function MyLandingPage() {
    return (
        <div>
            <LazyHero imageSrc=" https://media.vanityfair.com/photos/59d6661de88e480d32590c85/7:3/w_1994,h_854,c_limit/sci-fi-movies-ss02.jpg">
                <h1>CINEVITTA 
                    Un viaje por el cosmos de la historia del cine</h1>
            </LazyHero>
        </div>
    );
}

export default MyLandingPage