function initMap() {
  var pos = {lat: 44.397053, lng: 8.98113439};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: pos
  });
  var marker = new google.maps.Marker({
    position: pos,
    map: map
  });
}