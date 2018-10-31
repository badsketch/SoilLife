var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
})


app.get('/food', function(req, res) {
    res.render('pages/food');
})
app.get('/fiber', function(req, res) {
    res.render('pages/fiber');
})
app.get('/filter', function(req, res) {
    res.render('pages/filter');
})
app.get('/foundation', function(req, res) {
    res.render('pages/foundation');
})
app.get('/farmaceuticals', function(req, res) {
    res.render('pages/farmaceuticals');
})
app.get('/fun', function(req, res) {
    res.render('pages/fun');
})

app.get('/about', function(req, res) {
    res.render('pages/about');
})

app.get('/media', function(req, res) {
    res.render('pages/media');
})
app.listen(port, function() {
    console.log('Our app is running');
});

// console.log('listening on port 3000...')