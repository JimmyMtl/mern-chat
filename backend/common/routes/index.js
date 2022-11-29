const express = require("express");
const userModel = require("../model/User/modelUser");
const app = express();
const router = express.Router();
const RouterUser = require('../routes/User/routesUser')
const RouterMessage = require('../routes/Message/routesMessage')

router.use('/user', RouterUser)
router.use('/message', RouterMessage)

module.exports = router;