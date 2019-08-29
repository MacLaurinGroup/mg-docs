const FileClass = require('../models/FileClass');
const FileClassView = require('../views/FileClassView') 
const fileParser = require('../utils/fileParser')
const DocumentSnippetController = require('./DocumentSnippetController');

const fileClassView = new FileClassView()
module.exports = class FileClassController {
  constructor(_fileName, _filePath) {
    this.model = new FileClass();
    this.view = fileClassView;

    this.model.setFileName(_fileName);
    this.model.setFilePath(_filePath + '/' + _fileName);

  }

  async parseFile() {
    const snippets = await fileParser.parseFileData(this.model.getFilePath());

    snippets.forEach(snippet => {
      this.model.addSnippet(new DocumentSnippetController(snippet));
    })
  }

  hasSnippets() {
    return this.model.snippets.length > 0;
  }

  getSnippets(_filters) {
    if(_filters) {
      return this.getSnippetsWithFilters(_filters);
    }

    return this.model.getSnippets();
  }

  getSnippetsWithFilters(_filters) {
    const allSnippets = this.model.getSnippets();
    let includedSnippets = [];
    let excludedSnippets = [];

    if(_filters.includeTags) {
      includedSnippets = this.model.getIncludedSnippets(_filters.includeTags, allSnippets);
    }

    if(_filters.excludeTags) {
      if(includedSnippets.length) {
        excludedSnippets = this.model.filterSnippets(_filters.excludeTags, includedSnippets);
      } else {
        excludedSnippets = this.model.filterSnippets(_filters.excludeTags, allSnippets);
      }

      return excludedSnippets;
    }

    return includedSnippets;
  }

  getHTML(_snippets) {
    return this.view.getHTML({snippets: _snippets, fileName: this.model.getFileName()});
  }
  
}