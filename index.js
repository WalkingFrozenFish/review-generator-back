const express = require("express");
const cors = require("cors");
const getDocumentData = require("./getDocumentData.js");

const port = 8000
const app = express();

app.use(cors())

app.get("/getrecomendation/:id", async (request, response) => {
    const data = await getDocumentData(request.params.id)
    response.send(data)
})

app.get("/geterror/:id", async (request, response) => {
    const data = await getDocumentData(request.params.id)
    response.send(data)
})

app.get("/getresult/:id", async (request, response) => {
    const data = await getDocumentData(request.params.id)
    response.send(data)
})


app.listen(port, () => {
    console.log(`Сервер был запущен на порту ${port}`)
});