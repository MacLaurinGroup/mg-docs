const fs = require('fs');
const util = require('util');
const DocsView = require('../views/DocsView');
const ContentsView = require('../views/ContentsView');

const writeFile = util.promisify(fs.writeFile)



class FileBuilder {
  async buildFile(_fileInsts, _config) {
    await writeFile(_config.outputFile, this.buildHTML(_fileInsts, _config));
  }

  buildHTML(_fileInsts, _config) {
    let html = ``;
    const docsView = new DocsView();
    const contentsView = new ContentsView();
    html += docsView.getDocumentHeader(_config);
    html += docsView.getHeaderBarHTML(_config);
    html += docsView.getOpenDocsBodyContainer();
    html += docsView.getHeadingTextHTML(_config.pageConfig);
    html += docsView.getTagsFilterHTML( this.getAllTags(_fileInsts) );

    let filters = null;

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

      const snippets = fileInst.getSnippets(filters);

      html += fileInst.getHTML(snippets);

    });
    html += docsView.getCloseDocsBodyContainer();
    html += contentsView.getHTML(_fileInsts, filters);
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
}

module.exports = new FileBuilder()