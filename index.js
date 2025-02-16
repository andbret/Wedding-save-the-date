
var yourAudio = document.getElementById('yourAudio'),
ctrl = document.getElementById('audioControl');

var images = ['MAGH_PHOTOS/001.jpg', 'MAGH_PHOTOS/002.jpg', 'MAGH_PHOTOS/003.jpg' , 'MAGH_PHOTOS/004.jpg'];

var index  = 0;
var $top   = $('#slide');

setInterval(function() {
   $top.animate({ fadeIn: 0 }, 0, function() {
     $top.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('+images[++index]+')');
     $top.animate({ fadeIn: 0 }, 0, function() {
       if(index === images.length-1) index = 0;
     });
   });
}, 3000);




$(document).ready(function(){
    $('.navbar-dark > button').on('click', function(){
        $('.navbar-dark').toggleClass('color-changed');
    });
    });








    $(function(){
        $("audio").on("play", function() {
            $("audio").not(this).each(function(index, audio) {
                audio.pause();
            });
        });
    });
 





    // here
    var $player = $('.js-audio-player')
    , $playbackClass = 'is-playing'
    , $fadeDuration = 500
  
  $player.each(function(index) {
    var $this = $(this)
      , id = 'audio-player-' + index
  
    $this.attr('id', id)
  
    $this.find('.js-control')[0].addEventListener('click', function() {
      resetPlayback(id)
      playback($this, $this.find('audio'), $this.find('video'))
    })
    
    // Reset state once audio has finished playing
    $this.find('audio')[0].addEventListener('ended', function() {
      resetPlayback()
    })
  })
  
  function playback($player, $audio, $video) {
    if ($audio[0].paused) {
      $audio[0].play()
      $video[0].play()
      $audio.animate({ volume: 1 }, $fadeDuration)
      $player.addClass($playbackClass)
    } else {
      $audio.animate({ volume: 0 }, $fadeDuration, function() {
        $audio[0].pause()
        $video[0].pause()
      })
      $player.removeClass($playbackClass)
    }
  }
  
  function resetPlayback(id) {
    $player.each(function() {
      var $this = $(this)
  
      if ($this.attr('id') !== id) {
        $this.find('audio').animate({ volume: 0 }, $fadeDuration, function() {
          $(this)[0].pause()
          $this.find('video')[0].pause()
        })
        $this.removeClass($playbackClass)
      }
    })
  }




  (function(){
    // Slide In Panel
	var panelTriggers = document.getElementsByClassName('js-mix-panel-trigger');
	if( panelTriggers.length > 0 ) {
		for(var i = 0; i < panelTriggers.length; i++) {
			(function(i){
				var panelClass = 'js-mix-panel-'+panelTriggers[i].getAttribute('data-panel'),
					panel = document.getElementsByClassName(panelClass)[0];
				// open panel when clicking on trigger btn
				panelTriggers[i].addEventListener('click', function(event){
					event.preventDefault();
					addClass(panel, 'mix-panel--is-visible');
				});
				//close panel when clicking on 'x' or outside the panel
				panel.addEventListener('click', function(event){
					if( hasClass(event.target, 'js-mix-close') || hasClass(event.target, panelClass)) {
						event.preventDefault();
						removeClass(panel, 'mix-panel--is-visible');
					}
				});
			})(i);
		}
	}
	
	function hasClass(el, className) {
	  	if (el.classList) return el.classList.contains(className);
	  	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
	function addClass(el, className) {
	 	if (el.classList) el.classList.add(className);
	 	else if (!hasClass(el, className)) el.className += " " + className;
	}
	function removeClass(el, className) {
	  	if (el.classList) el.classList.remove(className);
	  	else if (hasClass(el, className)) {
	    	var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	    	el.className=el.className.replace(reg, ' ');
	  	}
	}
})();