const { body } = require('express-validator');


const validations = [
    body('name')
    .notEmpty().withMessage('El nombre no puede estar vacio').bail()
    .isLength({ min: 4 , max: 20}).withMessage('El nombre debe tener entre 4 y 20 caracteres')
    ,
    body('email')
    .notEmpty().withMessage('El email no puede estar vacio').bail()
    .isEmail().withMessage('Debes escribir un email valido').bail()
    .isLength({ min: 4 , max: 100}).withMessage('El email debe tener entre 4 y 100 caracteres')
    ,
    body('password')
    .notEmpty().withMessage('La contraseña no puede estar vacia').bail()
    .isLength({ min: 4 , max: 16}).withMessage('La contraseña debe tener entre 4 y 16 caracteres')
    ,
    body('profileimg').custom((value, { req }) => {
        let file = req.file
        let acceptedExtensions = ['.jpg', '.png', '.gif']

        if (!file) {
            throw new Error('Tienes que subir una imagen')
        } else {
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones permitidas son: ${acceptedExtensions.join(', ')}`)
            }
        }
        return true
    })
]
module.exports = (validations)