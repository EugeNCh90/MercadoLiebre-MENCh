const express=require('express'); 
const path= require('path'); 
const app=express() 
const publicPath= path.resolve(__dirname,'./public');

app.use(express.static(publicPath));


//Creando Rutas

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
});
app.get("/public/css/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/css/style.css"));
})
app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'));
})
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

//Levantando el Servidor
app.listen(3001, () => {
    console.log("Servidor corriendo en el puerto 3001");
  });