
function lightbox() {
	// The lightbox should only be used at bigger screens
	if ( $(window).width() >= 840) {     
	  
	  // Create variables for easier use later
	  var $lightbox = $('<div tabindex="0" id="lightbox"></div>');
	  var $photo = $('<img>');
	  var $photoText = $('<p></p>');

	  // Add the photo and phototext to the lightbox
	  $lightbox.append($photo);
	  $lightbox.append($photoText);

	  // Append the lightbox to the body
	  $("body").append($lightbox);
      

      // Show lightbox on image-click
      $(".gallery img").click(function() {
        
        // Show arrows
          $("#next").show();
          $("#prev").show();

      	// Get the clicked photos src and alt
      	var photoSrc = $(this).attr("src");
      	var photoAlt = $(this).attr("alt");

        // Remove thumbnails/ from the src to get hig-res photo
        var highRes = photoSrc.replace("thumbnails/", "");

      	// Add the photo to the $image variable and the highRes variable to the photoText and then show the lightbox
      	$photo.attr("src", highRes);

      	$photoText.text(photoAlt);
      	$lightbox.show();
        $lightbox.focus();

        var $activePhoto = $(this);


        // The next and prev buttons should be clickable and show the next or prev image.


        $("#next").click(function() {
        // Get parent of the active image and go to next
        var $nextParent = $($activePhoto).parent().next();
        // Get the child of the new parent
        var $nextPhoto = $($nextParent).children("img");
        // Get the new src and swap the thumbnail src to high-res
        var $newSrc = $($nextPhoto).attr("src");
        var $newPhoto = $newSrc.replace("thumbnails/", "");
        // Set the new photo
        $photo.attr("src", $newPhoto);
        // Set the new activephoto for the next time the next or prev buttons gets clicked
        $activePhoto = $($nextParent).children("img");
        

      });



        $("#prev").click( function() {
          // Get the parent of the current image and go to prev
          var $prevParent = $($activePhoto).parent().prev();
          // Get the child of the new parent
          var $prevPhoto = $($prevParent).children("img");
          // Get the new src and swap the thumbnail to high-res
          $newSrc = $($prevPhoto).attr("src");
          $newPhoto = $newSrc.replace("thumbnails/", "");
          // Set the new photo
          $photo.attr("src", $newPhoto);
          // Set the new activephoto for the next time the prev or next buttons gets clicked
          $activePhoto = $prevParent.children("img");
        });



     // Make the same functions work on keypress (Right or left arrows)

       $("#lightbox").keyup(function(k) {
           if(k.keyCode == 39){
                    // Get parent of the active image and go to next
                var $nextParent = $($activePhoto).parent().next();
                // Get the child of the new parent
                var $nextPhoto = $($nextParent).children("img");
                // Get the new src and swap the thumbnail src to high-res
                var $newSrc = $($nextPhoto).attr("src");
                var $newPhoto = $newSrc.replace("thumbnails/", "");
                // Set the new photo
                $photo.attr("src", $newPhoto);
                // Set the new activephoto for the next time the next or prev buttons gets clicked
                $activePhoto = $($nextParent).children("img");
           }
       });


      $("#lightbox").keyup(function(k) {
        if(k.keyCode == 37) {
          // Get the parent of the current image and go to prev
          var $prevParent = $($activePhoto).parent().prev();
          // Get the child of the new parent
          var $prevPhoto = $($prevParent).children("img");
          // Get the new src and swap the thumbnail to high-res
          $newSrc = $($prevPhoto).attr("src");
          $newPhoto = $newSrc.replace("thumbnails/", "");
          // Set the new photo
          $photo.attr("src", $newPhoto);
          // Set the new activephoto for the next time the prev or next buttons gets clicked
          $activePhoto = $prevParent.children("img");
        }
      });







      });

      // Hide the lightbox when clicked
      $("#lightbox").click(function(){
      	$("#lightbox").hide();
        $("#next").hide();
        $("#prev").hide();
      });      
	   

	}
}


// Activate function when document is ready
$(document).ready(function(){
  lightbox();
});

// Check if the function should run after user-resize
$(window).resize(function(){
  $("#lightbox").remove();
  $("#next").hide();
  $("#prev").hide();
  lightbox();
});




