const config = require('../../../config.json')

class ListItem {
    getHTML(options) {
        return `
        <li>
            <a href="#${options.hrefToC}">${options.title}</a>
        </li>
        `
    }
}

module.exports = new ListItem();