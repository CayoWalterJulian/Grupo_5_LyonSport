const express = require("express");
const { usersController } = require("../controller/users");
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require("../middlewares/authMiddleware");
const validations = require('../middlewares/registerValidation')
const users = express.Router();
const uploadFile = require('../middlewares/userMulterMiddleware')




users.get('/profile', authMiddleware, usersController.profile)

users.get("/register", guestMiddleware, usersController.register)
users.post("/register", uploadFile.single('profileimg'), validations, usersController.processRegister)

users.get('/login', guestMiddleware, usersController.login)
users.post('/login', usersController.loginProcess)

users.get('/profile/userEdit/:id', usersController.viewEditProfile)
users.post('/profile/userEdit/:id',uploadFile.single('profileimg'), validations, usersController.editProfile)

users.get('/logout/', usersController.logout)

users.get('/deleteAccount', usersController.pageDeleteAccount)
users.post('/deleteAccount', usersController.deleteAccount)

users.get('/api/users', usersController.dataUsersApi)
users.get('/api/users/:id', usersController.dataUsersApi2)

module.exports = { users }