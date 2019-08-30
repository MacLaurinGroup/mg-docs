module.exports = `
html, body {
  margin: 0;
  padding: 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  background: #f7f6f6;
  scroll-behavior: smooth;
}

.mg-docs-sidebar {
  position: fixed;
  left: 0;
  top: 3.5rem;
  height: 100%;
  width: 18rem;
}

.mg-docs-body {
  position: relative;
  left: 18rem;
  top: 0;
  width: 45rem;
  min-height: 100%;
  background-color: white;
  padding: 3rem;
  padding-top: 5rem;
}

.mg-docs-body h3 {
  font-size: 1.5rem;
}

.mg-docs-contents {
  background-color: hsla(0, 14%, 15%, 1);
  height: inherit;
  padding-top: 1rem;
}

.mg-docs-contents h3 {
  color: white;
  margin-top: 0;
  padding-left: 1.1rem;
}

.mg-docs-contents ul {
  list-style: none;
  
}

.mg-docs-contents ul li a {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.mg-docs-contents ul li a.active {
  border-bottom: solid 2px #d10000;
}

.mg-docs-contents ul li {
  padding: 0.2rem;
  padding-left: 2rem;
}

.mg-docs-contents ul a:hover {
  color: hsla(0, 0%, 64%, 17);
}

.mg-docs-subsection h3 {
  font-size: 1.2rem;
}

.mg-docs-header {
  background-color: hsl(0, 0%, 100%);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  height: 4rem;
  box-shadow: #0000006e 0px 3px 10px;
}

.mg-docs-header img {
}

.mg-docs-header h1 {
  margin: 0;
  margin-bottom: 4rem;
  color: white;
}


/* SEARCH BAR */

.mg-docs-search {
  display: inline-block;
  position: absolute;
  left: 50%;
  width: 25rem;
  margin-left: -12.5rem;
  margin-top: 0.9rem;
}

.mg-docs-search input {
  width: 100%;
  height: 2rem;
  background-color: hsla(0, 0%, 93%, 1);
  border: none;
  padding-left: 1rem;
  border-radius: 0.2rem;
}

.mg-evt-docs-search-button button {
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ccc;
  line-height: 1.25;
  padding: .5rem .75rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #555;
}

.mg-docs-search-results {
  width: 25rem;
  background-color: white;
  position: absolute;
  top: 2rem;
  margin-left: -1px;
  border: 1px solid #e8e9ed;
}

.mg-docs-search-results a {
  text-decoration: none;
}

.mg-evt-docs-search-result {
  list-style: none;
  padding: 0.4rem 0.3rem;
  color: black;
}

.mg-evt-docs-search-result:hover {
  background-color:#e4e4e4;
  cursor: default;
}

section {
  margin-top: -4rem;
  padding-top: 4rem;
}

section h3 {
  margin-bottom: 0;
  display: inline-block;
}

.hide {
  display: none;
}

.mg-docs-snippet-list {
  margin: 0;
  padding: 0;
}

.mg-docs-section-list {
  margin-left: 1rem;
  padding: 0;
}

.mg-docs-badge {
  background-color: hsla(0, 100%, 41%, 1);
  width: fit-content;
  padding: 0.3rem 0.5rem;
  color: white;
  border-radius: 0.2rem;
  display: inline-block;
  margin-right: 0.4rem;
  font-size: 0.7rem;
  cursor: default;
}

.mg-docs-badge-row {
  margin-bottom: 1rem;
}

.mg-docs-badge-row-filters {
  margin-top: 1rem;
}

.mg-docs-badge-filter {
  border-color: hsla(0, 100%, 41%, 1);
  border-width: 2px;
  border-style: solid;
  color: hsla(0, 100%, 41%, 1);
  width: fit-content;
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  display: inline-block;
  margin-left: 0.4rem;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.mg-docs-badge-filter:hover {
  background-color: hsla(0, 100%, 41%, 1);
  color: white;
}

.mg-docs-badge-filter:active {
  background-color: hsla(0, 100%, 41%, 1);
  color: white;
}


.mg-docs-badge-filter.active {
  background-color: hsla(0, 100%, 41%, 1);
  color: white;
}

.mg-docs-badge-filter.active:hover {
  color: hsla(0, 100%, 41%, 1);
  background-color: white;
}

.mg-docs-badge-filter.active:active {
  color: hsla(0, 100%, 41%, 1);
  background-color: white;
}

.hide {
  display: none;
}
`