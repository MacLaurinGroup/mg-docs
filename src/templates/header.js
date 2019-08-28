const config = require('../../config.json')

module.exports = {
    html: `
    <html>
        <head>
            <title>${config.page.title}</title>
            <link rel="stylesheet" type="text/css" href="./styles.css" />
            <script src="./jquery.min.js"></script>
            <script src="./index.js"></script>
        </head>
        <body>
            
    `
}