

$(() => {
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

})