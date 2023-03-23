const express = require("express");
const cors = require("cors");
const getDocumentData = require("./getDocumentData.js");

const port = 8000
const app = express();

app.use(cors())

app.get("/recomendation/:id", async (request, response) => {
    const data = await getDocumentData(request.params.id)
    response.send(data)
})

app.get("/error/:id", async (request, response) => {
    const data = await getDocumentData(request.params.id)
    response.send(data)
})

app.get("/result/:id", async (request, response) => {
    const data = await getDocumentData(request.params.id)
    response.send(data)
})


app.listen(port, () => {
    console.log(`Сервер был запущен на порту ${port}`)
});