const express =  require ("express");

const CalculadoraController = require ("./controller/CalculadoraController");


const app= express();

app.use(express.json());

const port = 3300;


app.get("/",(req,res)=>{

console.log("Teste")
res.send("Testando API - teste nodemon")

});


app.get("/soma", CalculadoraController.soma);
app.get("/subtracao", CalculadoraController.subtracao);
app.get("/multiplicacao", CalculadoraController.multiplicacao);


app.listen(port,()=> console.log(`Servidor rodando na porta ${port}`))

module.exports=app