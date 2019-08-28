const listItem = require('./listItem');
const config = require('../../config.json');

class ContentsTable {
    constructor() {
        this.listItem = listItem
    }

    getOpenHTMLTag() {
        return `<ul class="${config.sideBar.contentsTable.class}">`
    }

    getCloseHTMLTag() {
        return `</ul>`
    }

    getListItems(items) {
        let html = ``
        items.forEach(item => {
            if(item.title.length > 0) {
                html += this.listItem.getHTML(item)
            }
        })

        return html
    }

    getHTML(options) {
        return `
            <div class="${config.sideBar.contentsTable.class}">
                <h3 class="${config.sideBar.contentsTable.header.class}">Contents</h3>
                ${this.getOpenHTMLTag()}
                    ${this.getListItems(options.items)}
                ${this.getCloseHTMLTag()}
            </div>
        `
    }
}

module.exports = new ContentsTable();