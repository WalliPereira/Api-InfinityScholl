const express = require("express") // importar o express para o arquivo js 
const cors = require ("cors") // importa o cors (lib para parar de reclamar o cors)
const api = express() // inicializa o express com suas funções

api.listen(80, () => console.log("A Api está rodando!"))
api.use(express.json())
api.use(cors()) // pediu para o express utilizar a lib cors

    const usuarios = [
        {
             id: 1,
             nome: "Wallisson",
             idade: 128,
             cidade: "Madrid"
         },
        {
             id: 2,
             nome: "Ermesson",
             cidade: "Madrid",
             idade: 0.6,
         }]

// rota do tipo GET => 
api.get("/api/usuarios", (requisicao, resposta) => {
    resposta.json(usuarios)
})

api.post("/api/usuarios", (requisicao, resposta) => {
    const nome = requisicao.body.nome
    const idade = requisicao.body.idade
    const cidade = requisicao.body.cidade

    usuarios.push({
        id: 3,
        nome,
        idade,
        cidade
    })
    resposta.json("Usuario criado com sucesso")
})