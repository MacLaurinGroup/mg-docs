const template = require('./templates/template')

module.exports = class SectionClass {
    constructor(_data) {
        this.title = _data.header;
        this.body = _data.body;
    }

    getHTMLBlock() {
        if(this.title.length > 0 || this.body.length > 0) {
            const options = {
                title: this.title,
                body: this.body
            }
            return template.pageBlockSection.getHTML(options)
        }
    }
}