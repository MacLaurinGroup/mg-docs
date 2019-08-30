module.exports = `
html, body {
  margin: 0;
  padding: 0;
  font-family: "Lato","proxima-nova","Helvetica Neue",Arial,sans-serif;;
  background: #f7f6f6;
  scroll-behavior: smooth;
  font-size: 16px;
}

#top h1 {
  font-size: 2.5rem;
}

.mg-docs-sidebar {
  position: fixed;
  left: 0;
  top: 0;
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
  padding-top: 1rem;
}

.mg-docs-body h3 {
  font-size: 1.5rem;
}

.mg-docs-contents {
  background-color: #404040;
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
  border-bottom: solid 2px #2980b9;
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
  background-color: #2980b9;
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
  border-color: #2980b9;
  border-width: 2px;
  border-style: solid;
  color: #2980b9;
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
  background-color: #2980b9;
  color: white;
}

.mg-docs-badge-filter:active {
  background-color: #2980b9;
  color: white;
}


.mg-docs-badge-filter.active {
  background-color: #2980b9;
  color: white;
}

.mg-docs-badge-filter.active:hover {
  color: #2980b9;
  background-color: white;
}

.mg-docs-badge-filter.active:active {
  color: #2980b9;
  background-color: white;
}

.hide {
  display: none;
}

.mg-docs-sidebar-header {
  background-color: #2980b9;
  padding: 2rem 1rem;
  color: white;
}

.mg-docs-sidebar-header h1 {
  margin: 0;
}
`