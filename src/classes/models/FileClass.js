/**
 * (c) 2019 MacLaurin Group
 */

module.exports = class FileClass {
  constructor() {
    this.fileName = "";
    this.filePath = "";
    this.snippets = [];
  }

  getFileName() {
    return this.fileName;
  }

  getFilePath() {
    return this.filePath;
  }

  getSnippets() {
    return this.snippets;
  }

  setFileName(_fileName) {
    this.fileName = _fileName;
  }

  setFilePath(_filePath) {
    this.filePath = _filePath;
  }

  addSnippet(_snippetInst) {
    this.snippets.push(_snippetInst);
  }

  filterSnippets(_excludeTags, _snippets) {
    const filteredSnippets = [];

    _snippets.forEach(snippetInst => {
      let shouldExclude = false;
      _excludeTags.forEach(tag => {
        if(snippetInst.hasTag(tag.trim())) {
          shouldExclude = true;
        }
      });
      if(!shouldExclude) {
        filteredSnippets.push(snippetInst);
      }
    });

    return filteredSnippets;
  }

  getIncludedSnippets(_includeTags, _snippets) {
    const includedSnippets = [];

    _snippets.forEach(snippetInst => {
      _includeTags.forEach(tag => {
        if(snippetInst.hasTag(tag.trim())) {
          includedSnippets.push(snippetInst);
        }
      });
    });

    return includedSnippets;
  }
}