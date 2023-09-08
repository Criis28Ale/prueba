const mysql = require("mysql");
const { connect } = require("./server");
const conn = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password: "root123",
        database : "proyecto"
    }
);

conn.connect(err => {
    if (err) {
        console.log("Coneccion Fallida al Servidor: " + err.message);
    } else {
        console.log("Coneccion excitosa a la Base de Datos");
    }
});

module.exports = conn;