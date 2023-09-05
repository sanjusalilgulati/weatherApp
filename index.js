const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const staticPath = path.join(__dirname, 'public');
const partialPath = path.join(__dirname, 'views/partials');
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

app.set('view engine', 'hbs');
app.get('/', (req,resp) => {
    resp.render('index');
});

app.get('/about', (req,resp) => {
    resp.render('about')
})

app.get('/weather', (req,resp) => {
    resp.render('weather')
})

app.get('*', (req,resp) => {
    resp.render("404");
})


app.listen('8008', (err) => {
    console.log("Server is running on 8008 port");
});