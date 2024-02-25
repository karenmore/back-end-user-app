const express = require('express');
const router = express.Router();
const usersRouter = require('./user.router')

// colocar las rutas aquí
router.use(usersRouter)


module.exports = router;