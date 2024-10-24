const mysql = require('mysql2/promise'); 

const db = async() => {

    try{

        const conexion = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
        });
        console.log('Conectado a la base de datos MySQL');
        return conexion

    }catch(error){
        console.log(error);
        throw new Error('Error en la conexion de la base de datos');
    }
}


module.exports = db;