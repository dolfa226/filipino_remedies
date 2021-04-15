$(document).ready(function() {
    $('.content-container').mousewheel(function(e, delta) {
      this.scrollLeft -= (delta);
      e.preventDefault();
    });
    
});


