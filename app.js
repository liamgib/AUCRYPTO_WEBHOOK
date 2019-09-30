const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.post('/update', (req, res) => {
    console.log('A');
    console.log('Incoming', JSON.stringify(req.body));
    res.json('OK');
});
  
app.listen(7658, '127.0.0.1', async () => {
    console.log('Webhook started');
});