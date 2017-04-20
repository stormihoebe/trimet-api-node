function Map(locationObject){
  this.locationObject = locationObject;
}

Map.prototype.initMap = function() {
  var uluru = this.locationObject;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
};
// {lat: -25.363, lng: 131.044}

exports.mapModule = Map;
