const config = require('../../config.json')

class ListItem {
    getHTML(options) {
        return `
        <li class="${config.sideBar.contentsTable.listItem.class}">
            <a href="#${options.hrefToC}">${options.title}</a>
        </li>
        `
    }
}

module.exports = new ListItem();