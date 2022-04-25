const express = require("express")
const path = require("path")
const app = express()

let puerto = 4000
app.listen(process.env.PORT || puerto, ()=>console.log("Servidor corriendo en el puerto ---> " + puerto))

//configuración para montar en Heroku

 const publicPath = path.resolve(__dirname,'./public')
  app.use(express.static(publicPath))

app.use(express.static("public"));

// app.use("/static",express.static(__dirname,))

app.get("/",(req, res) =>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get('/carrito',(req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/carrito.html'))
})

app.get("/login",(req, res) =>{
    res.sendFile(path.join(__dirname,"/views/logIn.html"))
})

app.get("/registro",(req, res) =>{
    res.sendFile(path.join(__dirname,"/views/Registro.html"))
})

app.get('/descripcion',(req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/descripcion.html'))
})
