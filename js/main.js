$(document).ready(function() {

  var pageScroll;
  var pages;

  function buildScrollPages() {
    var sections = document.querySelectorAll('.page-wrapper>section');
    pages = sections.length;

    for (var i = 0, x = 0; i < pages; i++, x += 100) {
      sections[i].setAttribute('style', 'top: ' + x + '%;');
    }
  }

  buildScrollPages();

  pageScroll = $('.page-wrapper').fullpage({
    onLeave: function(index, nextIndex, direction) {
      if (index < pages) {
        var sections = $('.next-page-stack-wrapper');

        $(sections[index - 1]).hide();
      }
    },
    afterLoad: function(anchorLink, index) {
      if (index < pages) {
        var sections = $('.next-page-stack-wrapper');

        $(sections[index - 1]).show();
      }
    },
  });

  $('.next-page-button').on('click', function(e) {
    $.fn.fullpage.moveSectionDown();
  });
});
