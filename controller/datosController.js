const {validationResult} = require('express-validator')
const { datas, writeDatasJSON } = require('../db/dataBase')


let nombre = datas[0].nombre
let mail = datas[0].mail
let edad = datas[0].edad
let fondo = datas[0].fondo


module.exports = {
   
    datos: (req, res) => {
        res.render("datos", {
            nombre, mail, edad, fondo
        })
        
    }
}