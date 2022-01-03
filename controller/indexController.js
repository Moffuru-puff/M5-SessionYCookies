const {validationResult} = require('express-validator')
const { datas, writeDatasJSON } = require('../db/dataBase')


module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    form: (req, res) => {
        
       

        
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            let {
                nombre,
                mail,
                edad,
                fondo,
                

            } = req.body

            let newData = {
                nombre: nombre.trim(),
                mail: mail.trim(),
                edad: edad.trim(),
                fondo: fondo
            }
            
            
               
               
                    datas.shift([0])
               
                    datas.push(newData)
                    writeDatasJSON(datas)

            
            
           res.redirect('/data')

           
        } else {
            res.render('index', {
                errors: errors.mapped(),
                session: req.session, 
                old: req.body 
            }) 
        }
    }
}