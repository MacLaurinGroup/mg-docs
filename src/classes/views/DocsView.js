/**
 * (c) 2019 MacLaurin Group
 */

const mgdocsJS = require('../../lib/mgdocsJS');
const mgdocsCSS = require('../../lib/mgdocsCSS');

module.exports = class MgDocsView {
  getDocumentHeader(_config) {
    let html = `<html><head><title>${_config.pageConfig.header.title}</title>
      <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"></script>
      <script>${mgdocsJS}</script>
      <style>${mgdocsCSS}</style>
    `;

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

    html += `</div>`;

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