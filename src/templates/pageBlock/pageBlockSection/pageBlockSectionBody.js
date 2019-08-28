const config = require('../../../../config.json');

class PageBlockSectionBody {
    getHTML(text) {
        return `
        <p>${text}</p>
        `;
    }
}

module.exports = new PageBlockSectionBody()