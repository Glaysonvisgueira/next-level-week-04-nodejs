import express from 'express';

const app = express();


app.get("/", (request, response) => {
    return response.json({message: "Olá!"})
});

app.post("/", (request, response) => {
    return response.json({messagem: "Os dados foram salvos com sucesso!"});
});

app.listen(3333, () => console.log('Servidor está ativado!'));