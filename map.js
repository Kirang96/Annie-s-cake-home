function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(10.224636, 76.203989),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}