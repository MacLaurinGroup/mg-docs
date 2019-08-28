const config = require('../../../config.json');

class PageBlockSectionHeader {
    getHTML(text, fileName) {
        return `<h3>${text}</h3>`
    }
}

module.exports = new PageBlockSectionHeader()