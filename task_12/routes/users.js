var express = require('express');
var router = express.Router();
const userController = require("../controllers/userControllers");
const uploadFile = require("../middleware/uploadFile");

/* GET users listing. */
router.post('/uploadFile', uploadFile,userController.registerUser);

module.exports = router;
