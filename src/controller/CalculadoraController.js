const Calculadora =require("../models/Calculadora");

class CalculadoraController {

    static async    soma(req,res){

        try{
        const query = req.query;
        console.log("query: ",query);
        
        const values = Object.values(query);
        console.log("values: ",values);
        const converteNumero =values.map((numero) =>{

        return Number(numero);

        })

        console.log("conversao: ", converteNumero);

        const soma = await Calculadora.soma(converteNumero[0],converteNumero[1]);
        // const soma = Calculadora.soma(...converteNumero);
        res.status(200).json ({
               "Resultado": soma,
                erro: false,

        });
    } catch (erro){
        if(erro){
            res.status(400).json({mensagem: "Erro de Rota na API", erro:true});

        }


    }
    
    }

    static async    subtracao(req,res){

        try{
        const query = req.query;
        console.log("query: ",query);
        
        const values = Object.values(query);
        console.log("values: ",values);
        const converteNumero =values.map((numero) =>{

        return Number(numero);

        })

        console.log("conversao: ", converteNumero);

        const subtracao = await Calculadora.subtracao(...converteNumero);
        // const soma = Calculadora.soma(...converteNumero);
        res.status(200).json ({
           "Resultado da Subtracao": subtracao,
                erro: false,

        });
    } catch (erro){
        if(erro){
            res.status(400).json({mensagem: "", erro:true});

        }


    }
    
    }


    static async    multiplicacao(req,res){

        try{
        const query = req.query;
        console.log("query: ",query);
        
        const values = Object.values(query);
        console.log("values: ",values);
        const converteNumero =values.map(numero =>{

        return Number(numero);

        })

        console.log("conversao: ", converteNumero);

        const  multiplicacao = await Calculadora.multiplicacao(converteNumero[0],converteNumero[1]);
        // const soma = Calculadora.soma(...converteNumero);
        res.status(200).json ({
           "Resultado da  Multiplicacao":  multiplicacao,
                erro: false,

        });
    } catch (erro){
        if(erro){
            res.status(400).json({mensagem: "", erro:true});

        }


    }
    
    }







}

module.exports = CalculadoraController