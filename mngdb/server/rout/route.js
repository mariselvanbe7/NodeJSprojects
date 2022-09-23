const express = require('express');
const router = express.Router();
const controll = require("../controller/controllersda");


router.get('/',controll.view);
router.get('/datas',controll.datas);
router.get('/adduser',controll.adduser);



module.exports = router;