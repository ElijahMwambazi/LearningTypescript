import { User } from "./User";
import { Company } from "./Company";

export interface Point {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class Map {
    private googleMap: google.maps.Map;

    constructor({ divId }: { divId: string }) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        }); // TODO: Install @types/googlemaps type definition
    }

    addMarker(Point: Point): void {
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
