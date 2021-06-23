const express = require('express');
const app = express();
const rotaCertificados = require('./routes/certificados');

app.use('/certificados', rotaCertificados);



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','GET', 'POST');
        return res.status(200).send({});
    }
    next();
});

module.exports = app;