const mammoth = require("mammoth")
const cheerio = require("cheerio")
const fs = require("fs")

const prepareHtmlDocument = (filename) => {
    mammoth.convertToHtml({ path: `./files/${filename}.docx` })
        .then(function (result) {
            let html = result.value; // The generated HTML
            // let messages = result.messages; // Any messages, such as warnings during conversion
            fs.writeFileSync(`./files/${filename}.html`, html)
        })
        .done();
}

// const prepareData = () => {
//     const file = fs.readFileSync(`./files/${filename}.html`, { encoding: "utf8" })
//     const $ = cheerio.load(file)
//     const itemsArray = []

//     $("tr").each((_, element) => {
//         const itemData = {
//             message: "",
//             point: 0
//         }

//         $(element).children("th").each((j, elem) => {
//             if (j == 0) {
//                 itemData.message = $(elem).text().trim()
//             } else {
//                 itemData.point = $(elem).text().trim()
//             }
//         })

//         itemsArray.push(itemData)
//     })

//     return itemsArray
// }

module.exports = {
    prepareHtmlDocument,
    // prepareData
}