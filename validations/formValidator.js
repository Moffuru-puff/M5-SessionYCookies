const {check} = require('express-validator')

module.exports = [
    check("nombre")
    .notEmpty().withMessage("El nombre es obligatorio"),

    check("fondo")
    .notEmpty().withMessage("El fondo es obligatorio"),

    check("mail")
    .notEmpty().withMessage("El email es obligatorio").bail()
    .isEmail().withMessage("Debe ser un email valido"),

    check("edad")
    .notEmpty().withMessage("La edad es obligatoria").bail()
    .isInt().withMessage("La edad solo admite numeros"),

]

