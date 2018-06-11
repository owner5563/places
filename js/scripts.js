// back end
function Location(place, landmark, date, notes, revisit) {
  this.placeName = place;
  this.landmarkName = landmark;
  this.dateName = date;
  this.notesName = notes;
  this.revisitName = revisit;
}

// front end
$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#new-place-name").val();
    var inputtedLandmarkName = $("input#new-landmark-name").val();
    var inputtedDateName = $("input#new-date-name").val();
    var inputtedNotesName = $("input#new-notes-name").val();
    var inputtedRevisitName = $("input#new-revisit-name").val();

    var newLocation = new Location(inputtedPlaceName, inputtedLandmarkName, inputtedDateName, inputtedNotesName, inputtedRevisitName);

    $("ul#places").append("<li><span class='location'>" + newLocation.placeName + "</span></li>");
    console.log(newLocation.placeName);
    $(".location").last().click(function() {
      console.log(newLocation.dateName);
      $("#show-location").show();
      $("#show-location h2").text(newLocation.placeName);
      $(".landmark-name").text(newLocation.landmarkName);
      $(".date-name").text(newLocation.dateName);
      $(".notes-name").text(newLocation.notesName);
      $(".revist-name").text(newLocation.revisitName);
    });
    $("input#new-place-name").val("");
  });
});
