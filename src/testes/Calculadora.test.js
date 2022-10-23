const Calculadora = require("../models/Calculadora")

describe("testando metodos de operacoes da model", () => {
    test("testando metodo soma esperando retorno correto:valor do tipo number", async () => {

        const resultadoSoma = await Calculadora.soma(2, 5);
        expect(resultadoSoma).toBe(7)

    })
    test("testando metodo soma esperando retorno incorreto:valor do tipo string", async () => {

        const resultadoSoma = await Calculadora.soma("2", "5");
        expect(resultadoSoma).toBe("25")


    })

    test("testando metodo subtracao esperando retorno correto:valor do tipo number", async () => {

        const resultadoSubtracao = await Calculadora.subtracao(5, 2);
        expect(resultadoSubtracao).toBe(3)

    })
    test("testando metodo subtracao esperando retorno incorreto:valor do tipo string", async () => {
        try { const resultadoSubtracao = await Calculadora.subtracao(5, 2)}

        catch (erro) { expect(erro).toBeTruthy() }


    })

    test("testando metodo multiplicacao esperando retorno correto:valor do tipo number", async () => {

        const resultadoMultiplicacao = await Calculadora.multiplicacao(2, 5);
        expect(resultadoMultiplicacao).toBe(10)

    })
    test("testando metodo multiplicacao esperando retorno incorreto:valor do tipo string", async () => {
        try { const resultadoMultiplicacao = await Calculadora.multiplicacao(5, 4)}

        catch (erro) { expect(erro).toBeTruthy() }

        


    })


    test("testando metodo divisao esperando retorno correto:valor do tipo number", async () => {

        const resultadoDivisao = await Calculadora.divisao(10, 2);
        expect(resultadoDivisao).toBe(5)

    })
    test("testando metodo divisao esperando retorno incorreto:valor do tipo string", async () => {

        try { const resultadoMultiplicacao = await Calculadora.multiplicacao(5, 4)}

        catch (erro) { expect(erro).toBeTruthy() }


    })




})