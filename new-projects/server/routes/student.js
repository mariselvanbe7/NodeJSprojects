const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentControllers");

router.get("/",studentController.view); 
router.get("/adduser",studentController.adduser); 

module.exports = router;