const request = require('postman-request');

const getAllFilms = (callback) => {
    request('http://localhost:3001/catalogo', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontró el catálogo.", undefined);
        }
    });
}

module.exports= {
 
  getAllFilms

}
