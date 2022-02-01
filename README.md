El Proyecto es un cineclub de barrio llamado Cinevitta dedicado a la difusión de cine arte. 

Front: Es una pagina de inicio estatica con cards hecho en React + un form de contacto (de formspree). Buscó ser una transposición a React de la página estática html del curso inicial.

Back: Creé una base de datos en MongoAtlas (“cinevitta”) con una sola collection (“films”) con la intención de ser traída a un link de “/catalogo”. La idea era crear una petición GET a “cinevitta/catalogo” que llamara a todos los objetos de la base de datos cinevitta (en Mongo) y los convierta en cards.
