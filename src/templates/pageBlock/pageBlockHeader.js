const config = require('../../../config.json');

class PageBlockHeader {
    getHTML(text, fileName) {
        return `<h3>${text}</h3>`
    }
}

module.exports = new PageBlockHeader()