require('dotenv').config()
const express = require("express");
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;
//handlebars

app.set('view engine', 'hbs'); 
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido e
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("home", {
    nombre: " Cristian Parra",
    titulo: "Curso de Node",
  });
});



app.get("/generic", (req, res) => {
  res.render('generic',{
    nombre: " Cristian Parra",
    titulo: "Curso de Node",
  });
});
app.get("/elements", (req, res) => {
  res.render('elements',{
    nombre: " Cristian Parra",
    titulo: "Curso de Node",
  });
});


app.get("*", function (req, res) {
  res.send("no existe");
});

app.listen(port, ()=> console.log(`esta corriendo en el puerto: ${port}`));
