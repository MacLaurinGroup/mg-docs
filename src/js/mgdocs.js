const handleSearch = () => {
    $(".mg-evt-docs-search-input").keyup(s => {
      const e = $(s.target).val().trim().toLowerCase();
      "" === e ? ($(".mg-evt-docs-search-result").removeClass("hide"), $(".mg-docs-search-results").addClass("hide")) : $(".mg-evt-docs-search-result").each((s, t) => {
        const a = $(t);
        let c = !0;
        a.attr("data-title").indexOf(e) >= 0 ? (c = !1, a.removeClass("hide")) : a.addClass("hide"), c ? $(".mg-evt-docs-search-results").addClass("hide") : $(".mg-docs-search-results").removeClass("hide")
      })
    }), $(".mg-evt-docs-search-input").blur(s => { setTimeout(() => $(".mg-docs-search-results").addClass("hide"), 100) }), $(".mg-docs-search-results").click(s => { $(".mg-evt-docs-search-input").val("") })
  },
  handleContents = () => {
    $(".mg-docs-section-list").addClass("hide"), $(".mg-docs-contents-snippet").click(s => {
      const e = $(s.target);
      $(".mg-docs-contents-snippet.active").removeClass("active"), $(".mg-docs-section-list").addClass("hide"), e.addClass("active"), e.parentsUntil("", "li").next("ul").removeClass("hide")
    }), $(".mg-docs-contents-snippet")[1].click()
  },
  activeFilters = {},
  handleFilters = () => {
    $(".mg-docs-badge-filter").click(s => {
      $(".mg-docs-contents-snippet").first().click();
      const e = $(s.target),
        t = e.html().trim();
      $(".mg-docs-snippet").addClass("hide"), $(".mg-docs-contents-snippet").parent().addClass("hide"), activeFilters[t] ? (delete activeFilters[t], e.removeClass("active")) : (activeFilters[t] = t, e.addClass("active"));
      const a = Object.keys(activeFilters);
      0 === a.length ? ($(".mg-docs-snippet").removeClass("hide"), $(".mg-docs-contents-snippet").parent().removeClass("hide")) : $(".mg-docs-badge").each((s, e) => {
        const t = $(e).html().trim();
        a.find(s => s === t) && $(e).parentsUntil("", ".mg-docs-snippet").removeClass("hide")
      }), $(".mg-docs-contents-snippet").each((s, e) => { const t = $(e); if (t.attr("data-tags").length > 0) { t.attr("data-tags").split(" ").forEach(s => { a.find(e => e === s) && t.parent().removeClass("hide") }) } }), $(".mg-docs-contents-snippet").first().parent().removeClass("hide")
    })
  };
$(() => {
  $(".mg-evt-docs-search-input").keyup(s => {
    const e = $(s.target).val().trim().toLowerCase();
    "" === e ? ($(".mg-evt-docs-search-result").removeClass("hide"), $(".mg-docs-search-results").addClass("hide")) : $(".mg-evt-docs-search-result").each((s, t) => {
      const a = $(t);
      let c = !0;
      a.attr("data-title").indexOf(e) >= 0 ? (c = !1, a.removeClass("hide")) : a.addClass("hide"), c ? $(".mg-evt-docs-search-results").addClass("hide") : $(".mg-docs-search-results").removeClass("hide")
    })
  }), $(".mg-evt-docs-search-input").blur(s => { setTimeout(() => $(".mg-docs-search-results").addClass("hide"), 100) }), $(".mg-docs-search-results").click(s => { $(".mg-evt-docs-search-input").val("") }), $(".mg-docs-badge-filter").click(s => {
    $(".mg-docs-contents-snippet").first().click();
    const e = $(s.target),
      t = e.html().trim();
    $(".mg-docs-snippet").addClass("hide"), $(".mg-docs-contents-snippet").parent().addClass("hide"), activeFilters[t] ? (delete activeFilters[t], e.removeClass("active")) : (activeFilters[t] = t, e.addClass("active"));
    const a = Object.keys(activeFilters);
    0 === a.length ? ($(".mg-docs-snippet").removeClass("hide"), $(".mg-docs-contents-snippet").parent().removeClass("hide")) : $(".mg-docs-badge").each((s, e) => {
      const t = $(e).html().trim();
      a.find(s => s === t) && $(e).parentsUntil("", ".mg-docs-snippet").removeClass("hide")
    }), $(".mg-docs-contents-snippet").each((s, e) => {
      const t = $(e);
      t.attr("data-tags").length > 0 && t.attr("data-tags").split(" ").forEach(s => { a.find(e => e === s) && t.parent().removeClass("hide") })
    }), $(".mg-docs-contents-snippet").first().parent().removeClass("hide")
  }), $(".mg-docs-section-list").addClass("hide"), $(".mg-docs-contents-snippet").click(s => {
    const e = $(s.target);
    $(".mg-docs-contents-snippet.active").removeClass("active"), $(".mg-docs-section-list").addClass("hide"), e.addClass("active"), e.parentsUntil("", "li").next("ul").removeClass("hide")
  }), $(".mg-docs-contents-snippet")[1].click()

  // Highlights the section you are currently viewing in the menu
  window.sections = $(".mg-docs-snippet");

  $(window).bind("scroll", function() {
    for (const section of window.sections) {
      const sectionId = $(section).attr("id");
      if (document.getElementById(sectionId).getBoundingClientRect().top < 5) {
        // Set the active section
        $(".active").removeClass("active");
        $(`[href='#${sectionId}']`).addClass("active");

        // Hide previous flyout
        $(".mg-docs-section-list").not(".hide").addClass("hide");

        // Show current menu item flyout
        if ($(".active").parent().next().is("ul")) {
          $(".active").parent().next().removeClass("hide");
        }

      } else {
        break;
      }
    }
  })
});