const { google } = require('googleapis');

const auth = new google.auth.GoogleAuth({
    // Здесь вам нужно указать путь к вашим учетным данным, которые вы загрузили из Google API Console
    keyFile: './hopeful-ally-381106-2e540f2d39db.json',
    scopes: [
        'https://www.googleapis.com/auth/documents.readonly',
        // Другие необходимые области доступа API
    ],
});

const docs = google.docs({ version: 'v1', auth });

async function getGoogleDocContents(docId) {
    const res = await docs.documents.get({ documentId: docId });
    const { body } = res.data;

    const bodyContent = body.content
    const tableData = []

    bodyContent.forEach(element => {
        if (element.hasOwnProperty("table")) {
            element.table.tableRows.forEach(element => {
                const itemObject = {
                    message: "",
                    point: 0
                }

                element.tableCells.forEach((item, index) => {
                    if (index === 0) {
                        itemObject.message = item.content[0].paragraph.elements[0].textRun.content.trim()
                    } else {
                        itemObject.point = item.content[0].paragraph.elements[0].textRun.content.trim()
                    }
                })

                tableData.push(itemObject)
            })
        }
    });


    return tableData
}

// getGoogleDocContents("1FwEo3MCYCcBjOS38XnxcWOHlUvuW0weNXzT3a6vHSb8");

module.exports = getGoogleDocContents
