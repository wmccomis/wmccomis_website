src="https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap&libraries=&v=weekly";

window.initMap = function initMap() {
const mapCenter= { lat: 41.6764, lng: -86.2520 };
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 12,
  center: mapCenter,
 });

  //styling for map
  const myElement = document.querySelector("#map");
  myElement.style.height = "600px";

}