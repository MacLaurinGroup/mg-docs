const fs = require('fs');
const fileParser = require('./fileParserClass');
const SectionClass = require('./sectionClass');
const template = require('./templates/template');

module.exports = class FileClass {
  constructor(_filePath , _fileName) {
    this.filePath = _filePath + '/' + _fileName;
    this.fileName = _fileName;
    this.hrefToC = _fileName;
    this.title = '';
    this.body = '';
    this.sections = [];
  }
  
  async setDocsData() {
    const fileData = await fileParser.getDocsData(this.filePath);
    this.title = fileData.title;
    this.body = fileData.body;
    if(fileData.sections.length > 0) {
      fileData.sections.forEach(section => {
        this.sections.push(new SectionClass(section));
      })
    }
  }

  getHTMLBlock() {
    if(this.title.length > 0 || this.body.length > 0) {
      const options = {
        title: this.title,
        body: this.body,
        id: this.fileName,
        items: this.sections
      }
      return template.pageBlock.getHTML(options);
    }

    return ``;
  }
}