const conn = require("../../config/database");
module.exports = (app) => {

    app.get('/loginE', (req, res) => {
        let consulta = `SELECT * FROM perfil_empresa`;
        conn.query(consulta, (err, rows, cols) => {
            if (err) {
                res.status(500).json({status: 0, mensaje : "Error en el Servidor"});
            } else {
                res.json({status: 1, mensaje: "Datos Obtenidos", values: rows});
            }
        });
    });

    app.get('/loginD', (req, res) => {
        let consulta = `SELECT * FROM datos_personales`;
        conn.query(consulta, (err, rows, cols) => {
            if (err) {
                res.status(500).json({status: 0, mensaje : "Error en el Servidor"});
            } else {
                res.json({status: 1, mensaje: "Datos Obtenidos", values: rows});
            }
        });
    });

}
