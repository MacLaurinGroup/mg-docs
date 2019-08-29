module.exports = class DocumentSnippetSection {
    constructor() {
        this.title = '';
        this.body = '';
    }

    setTitle(_title) {
        this.title = _title;
    }

    setBody(_body) {
        this.body = _body;
    }

    getTitle(_title) {
        return this.title;
    }

    getBody() {
        return this.body;
    }

}