/**
 * (c) 2019 MacLaurin Group
 */

module.exports = class DocumentSnippetSection {
  constructor() {
    this.title = '';
    this.body = '';
    this.id = Math.round( Math.random() * 10000 );
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

  getId() {
    return this.id;
  }

}