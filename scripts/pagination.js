$(document).ready(function () {
  var totalPages = 10;
  var currentPage = 1;
  var maxPageNumbers = 5;

  function renderPagination() {
    var pageNumbers = $(".page-numbers");
    pageNumbers.empty();

    var startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    var endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    if (endPage - startPage + 1 < maxPageNumbers) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    for (var i = startPage; i <= endPage; i++) {
      var pageLink = $('<a href="#" class="page-number">' + i + "</a>");
      if (i === currentPage) {
        pageLink.addClass("active");
      }
      pageLink.click(function (e) {
        e.preventDefault();
        currentPage = parseInt($(this).text());
        renderPagination();
      });
      pageNumbers.append(pageLink);
    }

    if (currentPage === 1) {
      $(".first-page, .prev-page").addClass("disabled");
    } else {
      $(".first-page, .prev-page").removeClass("disabled");
    }

    if (currentPage === totalPages) {
      $(".next-page, .last-page").addClass("disabled");
    } else {
      $(".next-page, .last-page").removeClass("disabled");
    }
  }

  $(".first-page").click(function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage = 1;
      renderPagination();
    }
  });

  $(".prev-page").click(function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderPagination();
    }
  });

  $(".next-page").click(function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      renderPagination();
    }
  });

  $(".last-page").click(function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage = totalPages;
      renderPagination();
    }
  });

  renderPagination();
});
