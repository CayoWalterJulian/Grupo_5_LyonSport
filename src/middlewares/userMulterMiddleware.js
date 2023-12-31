const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file,cb) => {
        cb(null, './public/images/profile-img');
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, fileName);
    }
})

 const uploadFile = multer({ storage })

module.exports = uploadFile;