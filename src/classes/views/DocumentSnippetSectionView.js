/**
 * (c) 2019 MacLaurin Group
 */

module.exports = class DocumentSnippetSectionView {

  getHTML(_options) {
    return `
    <section id="${_options.title.replace(/ /gm, '_')}${_options.id}">
    <h4>${_options.title}</h4>
    <div>${_options.body}</div>
    </section>
    `;
  }

}