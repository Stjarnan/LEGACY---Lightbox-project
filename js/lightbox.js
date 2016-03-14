
$(document).ready(function (){
	// The lightbox should only be used at bigger screens
	if ( $(window).width() > 840) {     
	  
	  // Create variables for easier use later
	  var $lightbox = $('<div id="lightbox"></div>');
	  var $photo = $('<img>');
	  var $photoText = $('<p></p>');

	  // Add the photo and phototext to the lightbox
	  $lightbox.append($photo);
	  $lightbox.append($photoText);

	  // Append the lightbox to the body
	  $("body").append($lightbox);
      

      // Show lightbox on image-click
      $(".gallery img").click(function() {

      	// Get the clicked photos src and alt
      	var photoSrc = $(this).attr("src");
      	var photoAlt = $(this).attr("alt");

        // Remove thumbnails/ from the src to get hig-res photo
        var highRes = photoSrc.replace("thumbnails/", "");

      	// Add the photo to the $image variable and the photoSrc to the photoText and then show the lightbox
      	$photo.attr("src", highRes);

      	$photoText.text(photoAlt);
      	$lightbox.show();


      });

      // Hide the lightbox when clicked
      $("#lightbox").click(function(){
      	$("#lightbox").hide();
      });      
	   
	}
});