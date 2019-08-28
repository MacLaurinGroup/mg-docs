const config = require('../../../config.json');

class PageBlockSectionBody {
    getHTML(text) {
        return `
        <p class="${config.pageBlock.section.body.class}">${text}</p>
        `;
    }
}

module.exports = new PageBlockSectionBody()