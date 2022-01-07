const express = require('express');
const app = express();
const port = 3000;

var json = require('./currencies.json');

app.get('/', (req, res) => {
    res.json(json);
});

app.listen(port, () => {
    console.log("Listening on port ${port}");
})