function Map(locationObject){
  this.locationObject = locationObject;
}

Map.prototype.initMap = function() {
  var center = this.locationObject;
  map = new google.maps.Map (document.getElementById('map'),{
    zoom: 15,
    center: center
  });
  var marker = new google.maps.Marker({
    position: center,
    map: map
  });
};

Map.prototype.updateMap = function(cord){
  $("#map").empty();
  var center = cord;
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: center
  });
  var marker = new google.maps.Marker({
    position: center,
    map: map
  });
};
// {lat: -25.363, lng: 131.044}

exports.mapModule = Map;
