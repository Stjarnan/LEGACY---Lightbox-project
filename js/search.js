// Bind function to when input gets clicked
$(".search-field").keyup(function() {
    // Store search value and photo selector in variables for easier use
    var searchValue = $(".search-field").val();
    var photos = $('figure');

    // Have photos show before loop, to show before each search.
    photos.show();
    photos.each(function(){
        // Find alt value from figure
        var altValue = $(this).find("img").attr("alt");
        // Hide if alt does not match with searchvalue
        if(altValue.indexOf(searchValue) === -1){
            $(this).hide();                
        }
    });
});