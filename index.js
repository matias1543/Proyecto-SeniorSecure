const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
app.listen(3002)
module.exports = () => 'SeniorSecure'

//Url href
const url = require('url');
const myUrl = url.parse('http://SeniorSecureeeeeee.com');
const myUrlString = url.format(myUrl);


//Manda los datos ingresados por post
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Setean Main.Handlebars como TEMPLATE
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


//Archivos Assets Publicos
app.use(express.static('public'))


//Manejo de direcciones
app.get('/', function (req, res) {
    res.render('home', { selected: { home: true }})
})

app.get('/seguro', function (req, res) {
    res.render('seguro')
})

app.get('/accidente', function(req, res) {
    res.render('accidente')
})

app.get('/seguroautomotor', function(req, res) {
    res.render('seguroautomotor')
})

app.get('/segurohogar', function(req, res) {
    res.render('segurohogar')
})

app.get('/contacto', function(req, res) {
    res.render('contacto')
})

app.get('/cotizacion', function(req, res) {
    res.render('cotizacion')
})

app.get('/sobrenosotros', function(req, res) {
    res.render('sobrenosotros', { selected: { sobrenosotros: true }})
})

app.post('/contacto/submitporpost', function(req, res) {
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const telefono = req.body.telefono
    const email = req.body.email
    const edad = req.body.edad
    
    res.send(`
      Nombre: ${nombre}
      Apellido: ${apellido}
      Teléfono: ${telefono}
      Email: ${email}
      Edad: ${edad}
    `)
})

