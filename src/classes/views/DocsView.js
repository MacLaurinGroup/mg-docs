module.exports = class MgDocsView {
  getDocumentHeader(_config) {
    let html = `<html><head><title>${_config.pageConfig.header.title}</title>`;

    _config.pageConfig.header.jsFiles.forEach(jsFile => {
      html += `<script src="${jsFile}"></script>`;
    });

    _config.pageConfig.header.cssFiles.forEach(cssFile => {
      html += `<link rel="stylesheet" href="${cssFile}">`;
    });

    html += `</head><body>`;

    return html;
  }

  getDocumentFooter() {
    return `</body></html>`;
  }

  getHeaderBarHTML(_config, _data) {
    let html = `
      <div class="mg-docs-header">
        <a href="${_config.pageConfig.logo.url}" target="_blank"><img src="${_config.pageConfig.logo.src}"></a>`;

    html += this.getSearchBarHTML();
    html += `</div>`;

    return html;
  }

  getSearchBarHTML(_config, _data) {
    let html = `
    <div class="mg-docs-search">
      <div>
        <input class="mg-docs-search-input" type="search" placeholder="Search" autocomplete="off">
      </div>
      <div class="mg-docs-search-results"></div>
    </div>`;

    return html;
  }

  getOpenDocsBodyContainer() {
    return `<div class="mg-docs-body">`;
  }

  getCloseDocsBodyContainer() {
    return `</div>`;
  }

  getHeadingTextHTML(_options) {
    return `
      <section id="top">
        <h1>${_options.header.heading}</h1><div>${_options.header.introText}</div>
      </section>
    `;
  }

  getTagsFilterHTML(_tags) {
    let html = `<div class="mg-docs-badge-row-filters">Filters:`;

    Object.values(_tags).forEach(tag => {
      html += `<div class="mg-docs-badge-filter">${tag}</div>`;
    });

    html += `</div>`;

    return html;
  }
}