module.exports = class DocumentSnippet {
  constructor() {
    this.title = "";
    this.body = "";
    this.tags = [];
    this.sections = [];
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
  
  hasTag(_tag) {
    return this.tags.find(tag => tag === _tag) ? true : false;
  }
}