const { body } = require('express-validator');


const validations = [
    body('name')
    .notEmpty().withMessage('El nombre no puede estar vacio').bail()
    .isLength({ min: 4 , max: 50}).withMessage('El nombre debe tener entre 4 y 50 caracteres')
    ,
    body('price')
    .notEmpty().withMessage('El precio no puede estar vacio').bail()
    ,
    body('centralImage').custom((value, { req }) => {
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
    ,
    body('imageAngle1').custom((value, { req }) => {
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
    ,
    body('imageAngle2').custom((value, { req }) => {
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
    ,
    body('imageAngle3').custom((value, { req }) => {
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