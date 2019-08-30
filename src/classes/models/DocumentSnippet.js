/**
 * (c) 2019 MacLaurin Group
 */

module.exports = class DocumentSnippet {
  constructor() {
    this.title = "";
    this.body = "";
    this.tags = [];
    this.sections = [];
    this.id = Math.round( Math.random() * 10000 );
  }

  addTag(_tag) {
    this.tags.push(_tag);
  }
  
  addSection(_sectionInst) {
    this.sections.push(_sectionInst);
  }
  
  setTitle(_title) {
    this.title = _title;
  }
  
  setBody(_body) {
    this.body = _body;
  }

  getTitle() {
    return this.title;
  }

  getBody() {
    return this.body;
  }

  getSections() {
    return this.sections;
  }

  getTags() {
    return this.tags;
  }

  getId() {
    return this.id;
  }
  
  hasTag(_tag) {
    return this.tags.find(tag => tag === _tag) ? true : false;
  }
}