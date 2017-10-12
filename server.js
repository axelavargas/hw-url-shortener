var express = require('express'),
    fetch = require('node-fetch'),
    app = express(),
    cors = require('cors'),
    server = require('http').createServer(app);

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());


app.post("/shorten", (req, res) => {
    fetch("http://impraise-shorty.herokuapp.com/shorten", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    }).then((response) => {
        return response.json();
    }).then((data) => {
        res.send(data);
    });
});

app.get("/stats/:shortcode", (req, res) => {
    const url = `http://impraise-shorty.herokuapp.com/${req.params.shortcode}/stats`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        res.send(data);
    });
});

server.listen(3000);