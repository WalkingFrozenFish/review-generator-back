const express = require("express");
const { createData } = require("./parsing.js");
const { prepareHtmlDocument } = require("./prepare.js");
const cors = require("cors");
const getGoogleDocContents = require("./getDocumentData.js");

const port = 8000

const app = express();

app.use(cors())


// app.get("/", function (request, response) {
//     prepareHtmlDocument("recomendation")
//     prepareHtmlDocument("error")
//     prepareHtmlDocument("result")
// });

// app.get("/recomendation", (request, response) => {
//     const data = createData("recomendation")
//     response.send(data)
// })
// app.get("/error", (request, response) => {
//     const data = createData("error")
//     response.send(data)
// })
// app.get("/result", (request, response) => {
//     const data = createData("result")
//     response.send(data)
// })


app.get("/getrecomendation/:id", async (request, response) => {
    const data = await getGoogleDocContents(request.params.id)
    response.send(data)
})

app.get("/geterror/:id", async (request, response) => {
    const data = await getGoogleDocContents(request.params.id)
    response.send(data)
})

app.get("/getresult/:id", async (request, response) => {
    const data = await getGoogleDocContents(request.params.id)
    response.send(data)
})


app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`)
});






