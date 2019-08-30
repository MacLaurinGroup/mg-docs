/**
 * (c) 2019 MacLaurin Group
 */

module.exports = class DocumentSnippetView {

  getHTML(_options) {
    let html = `<section id="${_options.title.replace(/ /gm, '_')}${_options.id}" class="mg-docs-snippet"><h3>${_options.title}</h3>`;

    html += `<div class="mg-docs-badge-row">`;
    _options.tags.forEach(tag => {
      html += `<div class="mg-docs-badge">${tag}</div>`
    })
    html += `</div>`
    
    html += `<div>${_options.body}</div>`

    _options.sections.forEach(sectionInst => {
      html += sectionInst.getHTML();
    })
    
    html += `</section>`;

    return html;
  }

}