const express = require('express')
const app = express()
var hbs = require('hbs');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

// express hbs engine
app.set('view engine', 'hbs');
hbs.registerHelper('getAnyo', () => {
    return new Date().getFullYear();
})

app.get('/', function(req, res) {
    res.render('home', {
        nombre: "jesus Martí",
    });
})

app.get('/about', function(req, res) {
    res.render('about', {
        nombre: "contacto",
    });
})



// app.get('/data', function(req, res) {
//     res.send('hola data');
//     res.send(salida);
// })

app.listen(port, () => {
    console.log(`escuchando en el puerto 3000 ${port}`);
});