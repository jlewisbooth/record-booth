const express = require('express');
const path = require('path');
let router = express.Router();
let public_route = '../../public/';

router.get('/', (req,res,err) => {
    res.sendFile(path.join(__dirname, public_route + '/views/index.htm'));
})

module.exports = router;