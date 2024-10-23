const express = require('express');
require('dotenv').config();
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRutas = '/api/usuarios/';

        this.middlewares();
        this.rutas();
    }

    middlewares(){

        //uso de los cors
        this.app.use(cors());

        //lectura y parceo
        this.app.use( express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }

    //metodo de las rutas
    rutas(){
        this.app.use(this.usuariosRutas, require('../routes/usuarios'))
    }
 
    //metodo del puerto 
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        });
    }

}
module.exports = Server;