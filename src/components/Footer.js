import SimpleReactFooter from "simple-react-footer";
import React, { Component} from 'react';

 class Footer extends Component {
render() {
  const description = "Cinevitta es un cineclub del barrio de Villa Crespo dedicado a la curaduría del cine arte. Organizado por un grupo de cinéfilos apasionados, es un espacio dedicado a la reflexión en torno al séptimo arte que busca difundir obras clásicas al público de todas las edades y clases sociales. Consideramos al cine la forma más vulgar del entretenimiento y la más elevada del conocimiento.";
  const title = "Cinevitta";
  const columns = [
    {
        title: "Categorías",
        resources: [
            {
                name: "Nosotros",
                link: "/nosotros"
            },
            {
                name: "Cursos",
                link: "/cursos"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "Ciclos",
                link: "/ciclos"
            }
        ]
    },
    {
        title: "Manifiesto",
        resources: [
            {
                name: "Arte",
                link: "/arte"
            },
            {
                name: "Filosofía",
                link: "/filosofía"
            }
        ]
    },
    {
        title: "Visitas",
        resources: [
            {
                name: "Local",
                link: "/local"
            },
            {
                name: "Museo",
                link: "/museo"
            }
        ]
    }
 ];
 return <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright="black"
    iconColor="black"
    backgroundColor="bisque"
    fontColor="black"
    copyrightColor="darkgrey"
 />;
};
 
}

export default Footer;