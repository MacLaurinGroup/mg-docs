module.exports = class DocumentSnippetSectionView {

  getHTML(_options) {
    return `
    <section id="">
    <h4>${_options.title}</h4>
    <div>${_options.body}</div>
    </section>
    `;
  }

}