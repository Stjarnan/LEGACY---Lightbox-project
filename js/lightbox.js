
// Function to exit lightbox
          function closeLightbox(){
            $("#lightbox").hide();
            $("#next").hide();
            $("#prev").hide();
            $("#close").hide();
          }

function lightbox() {
	// The lightbox should only be used at bigger screens
	   
	  
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
        
        // Show arrows and close icon
          $("#next").show();
          $("#prev").show();
          $("#close").show();

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

        // declaring the variables for later use in the functions below
        var $activePhoto = $(this);
        var $nextParent;
        var $nextPhoto;
        var $newSrc;
        var $newAlt;
        var $newPhoto;
        var $prevParent;
        var $prevPhoto;

        // The next and prev buttons should be clickable and show the next or prev image.

        function next(){
          if ($($activePhoto).parent().hasClass("last")) {
                // Get parent of the active image/alt and go to next
             $nextParent = $($activePhoto).parent().siblings().first();
            // Get the child of the new parent
             $nextPhoto = $($nextParent).children("img");
            // Get the new src/alt and swap the thumbnail src to high-res
             $newSrc = $($nextPhoto).attr("src");
             $newAlt = $($nextPhoto).attr("alt");
             $newPhoto = $newSrc.replace("thumbnails/", "");
            // Set the new photo/alt
            $photo.attr("src", $newPhoto);
            $photoText.text($newAlt);
            // Set the new activephoto for the next time the next or prev buttons gets clicked
            $activePhoto = $($nextParent).children("img"); 
          } 
          else {
               // Get parent of the active image/alt and go to next
            $nextParent = $($activePhoto).parent().next();
            // Get the child of the new parent
             $nextPhoto = $($nextParent).children("img");
            // Get the new src/alt and swap the thumbnail src to high-res
             $newSrc = $($nextPhoto).attr("src");
             $newAlt = $($nextPhoto).attr("alt");
             $newPhoto = $newSrc.replace("thumbnails/", "");
            // Set the new photo/alt
            $photo.attr("src", $newPhoto);
            $photoText.text($newAlt);
            // Set the new activephoto for the next time the next or prev buttons gets clicked
            $activePhoto = $($nextParent).children("img"); 
          }

        
        }


           function prev(){
              
          if ($($activePhoto).parent().hasClass("first")) {
            // Get the parent of the current image/alt and go to prev
             $prevParent = $($activePhoto).parent().siblings().last();
            // Get the child of the new parent
            $prevPhoto = $($prevParent).children("img");
            // Get the new src/alt and swap the thumbnail to high-res
             $newSrc = $($prevPhoto).attr("src");
             $newAlt = $($prevPhoto).attr("alt");
             $newPhoto = $newSrc.replace("thumbnails/", "");
            // Set the new photo/alt
            $photo.attr("src", $newPhoto);
            $photoText.text($newAlt);
            // Set the new activephoto for the next time the prev or next buttons gets clicked
            $activePhoto = $prevParent.children("img");
          }
            else {
              // Get the parent of the current image/alt and go to prev
            $prevParent = $($activePhoto).parent().prev();
            // Get the child of the new parent
            $prevPhoto = $($prevParent).children("img");
            // Get the new src/alt and swap the thumbnail to high-res
             $newSrc = $($prevPhoto).attr("src");
             $newAlt = $($prevPhoto).attr("alt");
             $newPhoto = $newSrc.replace("thumbnails/", "");
            // Set the new photo/alt
            $photo.attr("src", $newPhoto);
            $photoText.text($newAlt);
            // Set the new activephoto for the next time the prev or next buttons gets clicked
            $activePhoto = $prevParent.children("img");
            }


           }

        
        $("#next").click(function() {
              
              next();        

      });



        $("#prev").click( function() {
            prev();
        });

        $("#close").click(function(){
          closeLightbox();
        });

     // Make the same functions work on keypress (Right or left arrows)

       $("#lightbox").keydown(function(k) {
           if(k.keyCode == 39){
                next();
           }
       });


      $("#lightbox").keydown(function(k) {
        if(k.keyCode == 37) {
          prev();
        }
      });

      // Close lightbox on keystroke 
      $("#lightbox").keydown(function(k) {
        if(k.keyCode == 27) {
          closeLightbox();
        }
      });





      });



      // Hide the lightbox when clicked
      $("#lightbox").click(function(){
      	closeLightbox();
      });      
	   

	
}


// Activate function when document is ready
$(document).ready(function(){
  lightbox();
});






