/**
 * (c) 2019 MacLaurin Group
 */

module.exports = class ContentsView {
  getHTML(_snippets, _config) {
    let html = `<div class="mg-docs-sidebar">`

    html += `<div class="mg-docs-sidebar-header"><h1>${_config.pageConfig.header.title}</h1></div>
    <div class="mg-docs-contents"><h3>Contents</h3><ul class="mg-docs-snippet-list">`;

    _snippets.forEach(snippetInst => {
      const snippetData = snippetInst.getSnippetData();
      html += `<li>
        <a
          href="#${snippetData.id}"
          class="mg-docs-contents-snippet"
          data-tags="${snippetData.tags.join(' ')}"
        >${snippetData.title}</a>
      </li>`;

      if(snippetData.sections.length > 0) {
        html += this.getSectionListHTML(snippetData);
      }
    })

    html += `<li style="padding-top: 30px;"><a href="#top" class="mg-docs-contents-snippet" data-tags="" style="font-size: 0.7em">Back to top ^</a></li></ul></div></div>`

    return html;
  }

  getSectionListHTML(_snippetData) {
    let html = `<ul class="mg-docs-section-list">`;
    _snippetData.sections.forEach(sectionInst => {
      const sectionData = sectionInst.getSectionData();
      html += `<li><a href="#${sectionData.title.replace(/ /gm, '_')}${sectionData.id}">${sectionData.title}</a></li>`;
    })


    html += `</ul>`;

    return html;
  }

}
