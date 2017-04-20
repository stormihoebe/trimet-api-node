var trimetKey = require("./../.env").trimetKey;
var googleMapKey = require("./../.env").googleMapKey;
// <script async defer src='https://maps.googleapis.com/maps/api/js?key=AIzaSyD-9gxmm_lwAob-yiYLqBuOLJ0tU_PxXYk&callback=initMap'></script>
var Map = require("./../js/map.js").mapModule;

$(function(){
  $("#googleAPIScript").html("<script async defer src='https://maps.googleapis.com/maps/api/js?key="+googleMapKey+"&callback=initMap'></script>");
  var newMap = new Map({lat: -25.363, lng: 131.044});
  newMap.initMap();
  $("#trainSelected").change(function() {
    // if the option is green then add green line stops..

    var trainRoute = $("#trainSelected").val();

    if (trainRoute === "Blue to Gresham") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="9848">Hatfield Government Center</option>' +
        '<option value="9838">Fair Complex/Hillsboro Airport</option>' +
        '<option value="9831">Willow Creek/SW 185th Ave</option>' +
        '<option value="9830">Elmonica/SW 170th Ave</option>' +
        '<option value="9821">Beaverton Transit Center</option>' +
        '<option value="9969">Sunset Transit Center</option>' +
        '<option value="10120">Washington Park</option>' +
        '<option value="9758">Providence Park</option>' +
        '<option value="8334">Pioneer Square South</option>' +
        '<option value="8340">Rose Quarter</option>' +
        '<option value="8344">Hollywood/NE 42nd Ave</option>' +
        '<option value="8347">Gateway/NE 99th Ave</option>' +
        '<option value="8349">E 122nd Ave</option>' +
        '<option value="8355">Ruby Junction/E 197th Ave</option>' +
        '<option value="8359">Cleveland Ave</option>'
      );
    } else if (trainRoute === "Blue to Hillsboro") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="8359">Cleveland Ave</option>' +
        '<option value="8362">Ruby Junction/E 197th Ave</option>' +
        '<option value="8368">E 122nd Ave</option>' +
        '<option value="8370">Gateway/NE 99th Ave</option>' +
        '<option value="8373">Hollywood/NE 42nd Ave</option>' +
        '<option value="8377">Rose Quarter</option>' +
        '<option value="8383">Pioneer Square North</option>' +
        '<option value="9757">Providence Park</option>' +
        '<option value="10121">Washington Park</option>' +
        '<option value="9624">Sunset Transit Center</option>' +
        '<option value="9818">Beaverton Transit Center</option>' +
        '<option value="9829">Elmonica/SW 170th Ave</option>' +
        '<option value="9833">Willow Creek/SW 185th Ave</option>' +
        '<option value="9837">Fair Complex/Hillsboro Airport</option>' +
        '<option value="9848">Hatfield Government Center</option>'
      );
    } else if(trainRoute === "Green Line to City Ctr") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="13132">Clackamas Town Center</option>' +
        '<option value="13135">Lents/SE Foster Rd</option>' +
        '<option value="8370">Gateway/NE 99th Ave</option>' +
        '<option value="8373">Hollywood/NE 42nd Ave</option>' +
        '<option value="8377">Rose Quarter</option>' +
        '<option value="7601">Union Station/NW 5th & Glisan</option>' +
        '<option value="7646">Pioneer Place/SW 5th Ave</option>' +
        '<option value="7606">PSU South/SW 5th & Jackson</option>'
      );
    } else if (trainRoute === "Green Line to Clackamas") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="10293">PSU South/SW 6th & College</option>' +
        '<option value="7777">Pioneer Courthouse/SW 6th Ave</option>' +
        '<option value="7763">Union Station/NW 6th & Hoyt</option>' +
        '<option value="8340">Rose Quarter</option>' +
        '<option value="8344">Hollywood/NE 42nd Ave</option>' +
        '<option value="8347">Gateway/NE 99th Ave</option>' +
        '<option value="13128">Lents/SE Foster Rd</option>' +
        '<option value="13132">Clackamas Town Center</option>'
      );
    } else if (trainRoute === "Orange Line to Milwaukie") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="7601">Union Station/NW 5th Glisan</option>' +
        '<option value="7646">Pioneer Place/SW 5th Ave</option>' +
        '<option value="7606">PSU South/SW 5th & Jackson</option>' +
        '<option value="13711">South Waterfront/SW Moody</option>' +
        '<option value="13712">OMSI/SE Water</option>' +
        '<option value="13715">SE 17th Ave & Holgate Blvd</option>' +
        '<option value="13717">SE Tacoma/Johnson Creek</option>' +
        '<option value="13718">Milwaukie/Main St</option>' +
        '<option value="13720">SE Park Ave</option>'
      );
    } else if (trainRoute === "Orange Line to City Ctr/Expo") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="13720">SE Park Ave</option>' +
        '<option value="13721">Milwaukie/Main St</option>' +
        '<option value="13722">SE Tacoma/Johnson Creek</option>' +
        '<option value="13724">SE 17th Ave & Holgate Blvd</option>' +
        '<option value="13727">OMSI/SE Water</option>' +
        '<option value="13728">South Waterfront/SW Moody</option>' +
        '<option value="10293">PSU South/SW 6th & College</option>' +
        '<option value="7777">Pioneer Courthouse/SW 6th Ave</option>' +
        '<option value="7763">Union Station/NW 6th & Hoyt</option>'
      );
    } else if (trainRoute === "Red Line to Beaverton") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="10579">Portland Int\'l Airport</option>' +
        '<option value="8370">Gateway/NE 99th Ave</option>' +
        '<option value="8373">Hollywood/NE 42nd Ave</option>' +
        '<option value="8377">Rose Quarter</option>' +
        '<option value="8383">Pioneer Square North</option>' +
        '<option value="9757">Providence Park</option>' +
        '<option value="10121">Washington Park</option>' +
        '<option value="9624">Sunset Transit Center</option>' +
        '<option value="9818">Beaverton Transit Center</option>'
      );
    } else if (trainRoute === "Red to Airport") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="9821">Beaverton Transit Center</option>' +
        '<option value="9969">Sunset Transit Center</option>' +
        '<option value="10120">Washington Park</option>' +
        '<option value="9758">Providence Park</option>' +
        '<option value="8334">Pioneer Square South</option>' +
        '<option value="8340">Rose Quarter</option>' +
        '<option value="8344">Hollywood/NE 42nd Ave</option>' +
        '<option value="8347">Gateway/NE 99th Ave</option>' +
        '<option value="10579">Portland Int\'l Airport</option>'
      );
    } else if (trainRoute === "Yellow Line to Expo Ctr") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="10293">PSU South/SW 6th & College</option>' +
        '<option value="7777">Pioneer Courthouse/SW 6th Ave</option>' +
        '<option value="7763">Union Station/NW 6th & Hoyt</option>' +
        '<option value="11508">Interstate/Rose Quarter</option>' +
        '<option value="11511">N Prescott St</option>' +
        '<option value="11514">N Lombard</option>' +
        '<option value="11498">Expo Center</option>'
      );
    } else if (trainRoute === "Yellow Line to City Ctr/PSU") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="11498">Expo Center</option>' +
        '<option value="11501">N Lombard Transit</option>' +
        '<option value="11504">N Prescott St</option>' +
        '<option value="11507">Interstate/Rose Quarter</option>' +
        '<option value="7601">Union Station/NW 5th & Gilsan</option>' +
        '<option value="7646">Pioneer Place/SW 5th Ave</option>' +
        '<option value="7606">PSU South/SW 5th & Jackson</option>'
      );
    }
  });


  $("#trainStopSelected").change(function() {
    var trainStop = $('#trainStopSelected').find(":selected").val();
    // ajax call with .get and Json return
    var vehicleID;
    var trainLat;
    var trainLong;
    $.get("https://developer.trimet.org/ws/v2/arrivals?locIDs=" + trainStop + "&json=true&appID="+trimetKey)
    .then(function(response){
      console.log("i am the first call.");
      console.log(response);
      var trainFullSign = response.resultSet.arrival[0].fullSign;
      var estimatedTime = response.resultSet.arrival[0].estimated;
      var scheduledTime = response.resultSet.arrival[0].scheduled;
      var scheduledDate = new Date(0);
      scheduledDate.setUTCMilliseconds(scheduledTime);
      var arrivalTime = scheduledDate.toLocaleTimeString();
      $.get("https://developer.trimet.org/ws/v2/vehicles?ids="+response.resultSet.arrival[0].vehicleID+"&json=true&appID="+trimetKey)
      .then(function(responseNext){
        console.log("i am the second call.");
        console.log("Vehicle Id from second call--"+responseNext.resultSet.vehicle[0].vehicleID );
        console.log("Next Stop from second call--"+responseNext.resultSet.vehicle[0].nextLocID );
        console.log("Original stop selected--" + trainStop);
        trainLat = responseNext.resultSet.vehicle[0].latitude;
        trainLong = responseNext.resultSet.vehicle[0].longitude;
        console.log("latitude--"+ trainLat);
        console.log("longitude--"+ trainLong);
        $("#lat").html(trainLat);
        $("#long").html(trainLong);
      })
      .fail(function(error) {
        console.log(error);
      });
    })
    .fail(function(error) {
      console.log(error);
    });
  }); // end of selection "form"
});
