"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function ArkansasLocationMap() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    if (window.google && window.google.maps) {
      console.log("Google Maps API already loaded.");
      if (!isMapLoaded) initMap();
      return;
    }
  }, [isMapLoaded]);

  const initMap = () => {
    const mapElement = document.getElementById("map");
    if (!mapElement) return;

    const map = new google.maps.Map(mapElement, {
      center: { lat: 35.90228295680537, lng: -93.22805855216237 },
      zoom: 8.75,
    });

    // Array of multiple markers
    const markers = [
      {
        position: { lat: 36.06238105728469, lng: -94.16501257497853 },
        title: "Fayetteville, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.17609587502799, lng: -94.21899903433086 },
        title: "Tontitown, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.18705448049194, lng: -94.54137652964485 },
        title: "Siloam Springs, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.33474428875954, lng: -94.1268850916185 },
        title: "Rogers, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.37147784416238, lng: -94.21020478073814 },
        title: "Bentonville, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.976384580016564, lng: -94.3196118825872 },
        title: "Prairie Grove, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.03992638056348, lng: -94.25373265882804 },
        title: "Farmington, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.00136880439326, lng: -94.00939970584662 },
        title: "Elkins, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.475787045099224, lng: -94.24991583933085 },
        title: "Bella Vista, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.36035196084727, lng: -94.28724650522503 },
        title: "Centerton, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.254316636542576, lng: -94.13782362330956 },
        title: "Lowell, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.93235388551764, lng: -94.18131464880818 },
        title: "West Fork, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.800834723595095, lng: -94.13588156553912 },
        title: "Winslow, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.94768096284132, lng: -94.42418102684752 },
        title: "Lincoln, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.994484935684966, lng: -94.17705314287024 },
        title: "Greenland, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.13329897392557, lng: -94.16403706603478 },
        title: "Johnson, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.26581310911997, lng: -94.23853250475905 },
        title: "Cave Springs, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.101171424344635, lng: -93.99181486651051 },
        title: "Goshen, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.087265974781985, lng: -93.73546293757673 },
        title: "Huntsville, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.143995032254274, lng: -93.86270367592303 },
        title: "Hindsville, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.26789328641579, lng: -94.48535125808992 },
        title: "Gentry, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.33615809961149, lng: -94.46171163527113 },
        title: "Decatur, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.39967633751368, lng: -93.74036000495342 },
        title: "Eureka Springs, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.36462884018918, lng: -93.56821562574974 },
        title: "Berryville, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.27783950620343, lng: -92.58716624406627 },
        title: "Flippin, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.340947352986795, lng: -92.38609000497661 },
        title: "Mountain Home, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.38420142200661, lng: -94.41890018026996 },
        title: "Fort Smith, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.279817422511556, lng: -93.13441666672014 },
        title: "Russellville, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.4592994542838, lng: -94.35894180046279 },
        title: "Van Buren, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.212522595094576, lng: -94.25439788471473 },
        title: "Greenwood, AR",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.47192759301134, lng: -93.46712657094137 },
        title: "Clarksville, AR",
        description: "",
        link: "",
      },
    ];

    // Loop through markers and add them to the map
    markers.forEach(({ position, title, description, link }) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: title || undefined, // Only add title if it exists
      });

      // Check if any info exists before creating an InfoWindow
      if (title || description || link) {
        const infoWindowContent = `
          <div>
            ${title ? `<h3>${title}</h3>` : ""}
            ${description ? `<p>${description}</p>` : ""}
            ${
              link
                ? `<a href="${link}" target="_blank" class="bold">Get directions</a>`
                : ""
            }
          </div>`;

        const infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent,
          disableAutoPan: true, // Prevents the small zoom/movement when clicking a marker
        });

        // Open InfoWindow on marker click
        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      }
    });

    setIsMapLoaded(true);
  };

  return (
    <>
      <div id="map" style={{ height: "550px", width: "100%" }} />
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
        strategy="afterInteractive"
        onLoad={initMap} // Ensures map initializes only after script loads
      />
    </>
  );
}
