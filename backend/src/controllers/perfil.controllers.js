import {getConnection, sql} from '../database/connection'

export const createDatos = async (req, res) => {
    try {
        const {noms, apes, dpi, date, tel,correo, pass} = req.body
        const pool = await getConnection()
        const result = await pool.request()
        .input("nombres", sql.VarChar, noms)
        .input("apellidos", sql.VarChar, apes)
        .input("dpi", sql.Char, dpi)
        .input("fecha", sql.VarChar, date)
        .input("telefono", sql.Char, tel)
        .input("correo", sql.VarChar, correo)
        .input("passwaord_p", sql.VarChar, pass)
        .query("INSERT INTO datos_personales (nombres, apellidos, dpi, fecha, telefono, correo, passwaord_p) VALUES (@nombres, @apellidos, @dpi, @fecha, @telefono, @correo, @passwaord_p)")    
        result.output = 'Se guardo el dato'
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const compDatos = async (req, res) => {
    try {
        const {correo, pass} = req.body
        const pool = await getConnection()
        const result = await pool.request()
        .input("correo", sql.VarChar, correo)
        .input("passwaord_p", sql.VarChar, pass)
        .query("SELECT * FROM datos_personales WHERE correo=@correo AND passwaord_p=@passwaord_p")    
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

