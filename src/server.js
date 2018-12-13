const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4488;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/dist', express.static(path.join(__dirname, '/dist')));
app.use('/src', express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});


// error handling middleware
app.use(function (err, req, res , next) {
    console.log(err);
    res.status(422).send({ error: err.message })
});

app.listen(PORT, () => {
    console.log(`Server is started on port №${PORT}`);
});