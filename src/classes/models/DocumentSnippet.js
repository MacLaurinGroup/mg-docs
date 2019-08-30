/**
 * (c) 2019 MacLaurin Group
 */

module.exports = class DocumentSnippet {
  constructor() {
    this.title = "";
    this.body = "";
    this.order = 0;
    this.tags = [];
    this.sections = [];
    this.id = '';
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

  setOrder(_order) {
    this.order = _order;
  }
  
  setId(_id) {
    this.id = _id;
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

  getOrder() {
    return this.order;
  }
  
  hasTag(_tag) {
    return this.tags.find(tag => tag === _tag) ? true : false;
  }
}