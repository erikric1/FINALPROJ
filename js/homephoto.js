$('.thumbnails .zoom').click(function(e){
      e.preventDefault();

      var photo_fullsize =  $(this).find('img').attr('src');

      $('.main-image img').attr('src', photo_fullsize);

    });