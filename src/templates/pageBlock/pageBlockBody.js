const config = require('../../../config.json');

class PageBlockBody {
    getHTML(text, items) {
        let html = `
        <p>${text}</p>
        `
        if(items.length > 0) {
            items.forEach(item => {
                html += item.getHTMLBlock()
            })
        }
        return html;
    }
}

module.exports = new PageBlockBody()