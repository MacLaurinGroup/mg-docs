const pageBlockSectionHeader = require('./pageBlockSectionHeader');
const pageBlockSectionBody = require('./pageBlockSectionBody');
const config = require('../../../../config.json');

class PageBlock {
    constructor() {
        this.header = pageBlockSectionHeader;
        this.body = pageBlockSectionBody;
    }

    getOpenHTMLTag(id) {
        return `<section id="${id}" class="${config.pageBlock.subsectionClass}">`
    }

    getCloseHTMLTag() {
        return `</section>`
    }

    getHTML(options) {
        return `
            ${this.getOpenHTMLTag(options.id)}
                ${this.header.getHTML(options.title, options.id)}
                ${this.body.getHTML(options.body)}
            ${this.getCloseHTMLTag()}
        `
    }
}

module.exports = new PageBlock()