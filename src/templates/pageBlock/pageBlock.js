const pageBlockHeader = require('./pageBlockHeader');
const pageBlockBody = require('./pageBlockBody');
const config = require('../../../config.json');

class PageBlock {
    constructor() {
        this.header = pageBlockHeader;
        this.body = pageBlockBody;
    }

    getOpenHTMLTag(id) {
        return `<section id="${id}" class="${config.pageBlock.class}">`
    }

    getCloseHTMLTag() {
        return `</section>`
    }

    getHTML(options) {
        return `
            ${this.getOpenHTMLTag(options.id)}
                ${this.header.getHTML(options.title, options.id)}
                ${this.body.getHTML(options.body, options.items)}
            ${this.getCloseHTMLTag()}
        `
    }
}

module.exports = new PageBlock()