const handleSearch = () => {
  $('.mg-evt-docs-search-input').keyup(event => {
    const searchTerm = $(event.target).val().trim().toLowerCase();
    
    if(searchTerm === '') {
      $('.mg-evt-docs-search-result').removeClass('hide')
      $('.mg-docs-search-results').addClass('hide')
    } else {
      $('.mg-evt-docs-search-result').each((index, el) => {
        const $el = $(el);
        const searchValue = $el.attr('data-title');
        let noResults = true;
        if(searchValue.indexOf(searchTerm) >= 0) {
          noResults = false;
          $el.removeClass('hide');
        } else {
          $el.addClass('hide');
        }
        if(noResults) {
          $('.mg-evt-docs-search-results').addClass('hide');
        } else {
          $('.mg-docs-search-results').removeClass('hide');
        }
      });
    }
  })

  $('.mg-evt-docs-search-input').blur(event => {
    setTimeout(
      () => $('.mg-docs-search-results').addClass('hide'),
      100
    );
  });

  $('.mg-docs-search-results').click(event => {
    $('.mg-evt-docs-search-input').val('')
  })
}


//----------------------------------------------------------------------------

const handleContents = () => {
  $('.mg-docs-section-list').addClass('hide');
  
  $('.mg-docs-contents-snippet').click(event => {
    const $target = $(event.target);
    $('.mg-docs-contents-snippet.active').removeClass('active');
    $('.mg-docs-section-list').addClass('hide');
    $target.addClass('active');
    
    const $parent = $target.parentsUntil('', 'li');
    $parent.next('ul').removeClass('hide');

  });

  $('.mg-docs-contents-snippet')[1].click();
}

//----------------------------------------------------------------------------

const activeFilters = {};

const handleFilters = () => {
  $('.mg-docs-badge-filter').click(event => {
    $('.mg-docs-contents-snippet').first().click();
    const $target = $(event.target);
    const tag = $target.html().trim();
    $('.mg-docs-snippet').addClass('hide');
    $('.mg-docs-contents-snippet').parent().addClass('hide');
    if(activeFilters[tag]) {
      // make it un active
      delete activeFilters[tag];
      $target.removeClass('active');
    } else {
      activeFilters[tag] = tag;
      $target.addClass('active');
    }

    const tagsArr = Object.keys(activeFilters);
    if(tagsArr.length === 0) {
      $('.mg-docs-snippet').removeClass('hide');
      $('.mg-docs-contents-snippet').parent().removeClass('hide');
    } else {
      $('.mg-docs-badge').each((index, el) => {
        const innerTag = $(el).html().trim();
        if( tagsArr.find(tag => tag === innerTag) ) {
          $(el).parentsUntil('', '.mg-docs-snippet').removeClass('hide');
        }
      })
    }

    $('.mg-docs-contents-snippet').each((index, el) => {
      const $el = $(el)

      if($el.attr('data-tags').length > 0) {
        const tags = $el.attr('data-tags').split(' ');
        tags.forEach(tag => {
          if( tagsArr.find(tagFilter => tagFilter === tag)) {
            $el.parent().removeClass('hide');
          }
        })
      }
    })
    $('.mg-docs-contents-snippet').first().parent().removeClass('hide');
  })
}

//----------------------------------------------------------------------------

$(() => {
  handleSearch();
  handleFilters();
  handleContents();
})