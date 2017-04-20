var map;
function Map(locationObject){
  this.locationObject = locationObject;
}

Map.prototype.initMap = function() {
  var uluru = this.locationObject;
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
};

// Map.prototype.updateMap = function(newLocation){
// map.center = newLocation;
// }
// {lat: -25.363, lng: 131.044}

exports.mapModule = Map;
