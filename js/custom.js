// Pause the video when the modal is closed
$(document).on('click', '.hanging-close, .modal-backdrop, .modal', function () {
    // Remove the src so the player itself gets removed, as this is the only
    // reliable way to ensure the video stops playing in IE
    $("#trailer-video-container").empty();
});
// Start playing the video whenever the trailer modal is opened
$(document).on('click', '.movie-tile', function () {
    var trailerYouTubeId = $(this).attr('data-trailer-youtube-id');
    var sourceUrl = 'http://www.youtube.com/embed/' + trailerYouTubeId + '?autoplay=1&html5=1';
    $("#trailer-video-container").empty().append($("<iframe></iframe>", {
      'id': 'trailer-video',
      'type': 'text-html',
      'src': sourceUrl,
      'frameborder': 0,
      'allowfullscreen': true 
    }));
});

// Animate in the movies when the page loads
$('.movie-tile').hide().first().show("fast", function showNext() {
  $(this).next("div").show("fast", showNext);
});

$('.navbar-brand').click(function(e){
  window.location.reload();
  e.preventDefault();
});

