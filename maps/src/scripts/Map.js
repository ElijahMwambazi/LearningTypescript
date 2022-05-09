"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
class Map {
    constructor({ divId }) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        }); // TODO: Install @types/googlemaps type definition
    }
    addMarker(Point) {
        const marker = google.maps.Markers({
            map: this.googleMap,
            location: {
                lat: Point.location.lat,
                lng: Point.location.lng,
            },
        });
        marker.addEventListener("click", function () {
            const infoWindow = new google.maps.InfoWindow({
                content: "Sup nigga?",
            });
            infoWindow.open(this.googleMaps, marker);
        });
    }
}
exports.Map = Map;
