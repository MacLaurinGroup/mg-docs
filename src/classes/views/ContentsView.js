module.exports = class ContentsView {
  getHTML(_fileInsts, filters) {
    let html = `<div class="mg-docs-sidebar"><div class="mg-docs-contents"><h3>Contents</h3><ul class="mg-docs-snippet-list">`

    _fileInsts.forEach(fileInst => {
      const snippets = fileInst.getSnippets(filters);
      snippets.forEach(snippetInst => {
        const snippetData = snippetInst.getSnippetData();
        html += `<li><a href="#${snippetData.title.replace(/ /gm, '_')}">${snippetData.title}</a></li>`;

        if(snippetData.sections.length > 0) {
          html += this.getSectionListHTML(snippetData);
        }
      });

    })

    html += `</ul></div></div>`

    return html;
  }

  getSectionListHTML(_snippetData) {
    let html = `<ul class="mg-docs-section-list">`;
    _snippetData.sections.forEach(sectionInst => {
      const sectionData = sectionInst.getSectionData();
      html += `<li><a href="#${sectionData.title.replace(/ /gm, '_')}">${sectionData.title}</a></li>`;
    })

    html += `</ul>`;

    return html;
  }

}