import {getConnection, sql} from '../database/connection'

export const getperfiles_e = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('SELECT * FROM perfil_empresa')    
        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const createperfil_e = async (req, res) => {
    try {
        const {nom_e, encar, dpi, correo, pass, tel} = req.body
        const pool = await getConnection()
        const result = await pool.request()
        .input("enombre", sql.VarChar, nom_e)
        .input("encargado", sql.VarChar, encar)
        .input("dpi_encargado", sql.Char, dpi)
        .input("correo", sql.Char, correo)
        .input("passwaord", sql.VarChar, pass)
        .input("telefono", sql.Char, tel)
        .query("INSERT INTO perfil_empresa (enombre, encargado, dpi_encargado, correo, passwaord, telefono) VALUES (@enombre, @encargado, @dpi_encargado, @correo, @passwaord, @telefono)")    
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const comPerfil = async (req, res) => {
    try {
        const {correo, pass} = req.body
        const pool = await getConnection()
        const result = await pool.request()
        .input("correo", sql.Char, correo)
        .input("passwaord", sql.VarChar, pass)
        .query("SELECT * FROM perfil_empresa WHERE correo = @correo AND passwaord = @passwaord")
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const deleteperfil_e = async (req, res) => {
    try {
        const {id} = req.params

        const pool = await getConnection()
        const result = await pool.request()
        .input("enombre", id)
        .query("DELETE FROM perfil_empresa WHERE enombre = @enombre")
        res.json(result.rowsAffected)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}