/**
 * (c) 2019 MacLaurin Group
 */

module.exports = class DocumentSnippetView {

  getHTML(_snippetData) {
    let html = `<section id="${_snippetData.id}" class="mg-docs-snippet"><h3>${_snippetData.title}</h3>`;

    if(_snippetData.showTags) {
      html += `<div class="mg-docs-badge-row">`;
      _snippetData.tags.forEach(tag => {
        html += `<div class="mg-docs-badge">${tag}</div>`
      })
      html += `</div>`
    }
    
    html += `<div>${_snippetData.body}</div>`;

    _snippetData.sections.forEach(sectionInst => {
      html += sectionInst.getHTML();
    });
    
    html += `</section>`;

    return html;
  }

}