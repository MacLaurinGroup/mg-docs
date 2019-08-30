/**
 * (c) 2019 MacLaurin Group
 */

const fs = require('fs');
const util = require('util');
const DocsView = require('../views/DocsView');
const ContentsView = require('../views/ContentsView');

const writeFile = util.promisify(fs.writeFile)

class FileBuilder {
  async buildFile(_fileInsts, _config, _outputFile) {
    await writeFile( _outputFile, this.buildHTML(_fileInsts, _config) );
  }

  buildHTML(_fileInsts, _config) {
    let html = ``;
    const docsView = new DocsView();
    const contentsView = new ContentsView();
    html += docsView.getDocumentHeader(_config);
    html += docsView.getHeaderBarHTML(_config);
    html += docsView.getOpenDocsBodyContainer();
    html += docsView.getHeadingTextHTML(_config.pageConfig);

    if(_config.showTags) {
      html += docsView.getTagsFilterHTML( this.getAllTags(_fileInsts) );
    }

    let filters = null;

    let allSnippets = [];

    _fileInsts.forEach(fileInst => {
      if(_config.includeTags.length > 0 || _config.excludeTags.length > 0) {
        filters = {};
        if(_config.includeTags.length > 0) {
          filters.includeTags = _config.includeTags;
        }
        if(_config.excludeTags.length > 0) {
          filters.excludeTags = _config.excludeTags;
        }
      }

      allSnippets = allSnippets.concat( fileInst.getSnippets(filters) );

    });

    const sortedSnippets = this.sortSnippets( allSnippets );

    sortedSnippets.forEach(snippet => {
      html += snippet.getHTML();
    });

    html += docsView.getCloseDocsBodyContainer();
    html += contentsView.getHTML(sortedSnippets);
    html += docsView.getDocumentFooter();

    return html;
  }

  getAllTags(_fileInsts) {
    const tags = {};

    _fileInsts.forEach(fileInst => {
      fileInst.getSnippets().forEach( snippet => {
        snippet.getSnippetData().tags.forEach(tag => {
          tags[tag] = tag;
        });
      });
    });

    return tags;
  }

  sortSnippets(_snippets) {
    return _snippets.sort((snippetA, snippetB) => {
      const snippetAOrder = snippetA.getSnippetData().order;
      const snippetBOrder = snippetB.getSnippetData().order;

      if(snippetAOrder < snippetBOrder) {
        return -1;
      }

      if(snippetAOrder > snippetBOrder) {
        return 1;
      }
      return 0;
    });
  }
}

module.exports = new FileBuilder()