module.exports = class FileClassView {
  constructor() {

  }

  getHTML(_options) {
    let html = ``;

    html += this.getOpenFileContainerHTML({id: _options.fileName});

    _options.snippets.forEach(snippetInst => {
      html += snippetInst.getHTML();
    });

    html += this.getCloseFileContainerHTML();

    return html;
  }

  getOpenFileContainerHTML(_options) {
    return `<section id="${_options.id}">`
  }

  getCloseFileContainerHTML() {
    return `</section>`
  }



}