/* Modules */
const express = require('express');
const path = require('path');
let public_route = '../public/';
let app = express();

/* Routers */
const homeRouter = require('./routes/home');


app.use(express.static(path.join(__dirname, public_route)));
app.use('/',homeRouter);

let port = 3000;

let server = app.listen(port, () => {
    console.log(`Web app listening on port ${port}!`)
})

