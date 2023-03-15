const cheerio = require("cheerio")
const fs = require("fs")

const createData = (filename) => {
    const file = fs.readFileSync(`./files/${filename}.html`, { encoding: "utf8" })
    const $ = cheerio.load(file)
    const itemsArray = []

    $("tr").each((_, element) => {
        const itemData = {
            message: "",
            point: 0
        }

        $(element).children("th").each((j, elem) => {
            if (j == 0) {
                itemData.message = $(elem).text().trim()
            } else {
                itemData.point = $(elem).text().trim()
            }
        })

        itemsArray.push(itemData)
    })

    return itemsArray
}

module.exports = {
    createData
}