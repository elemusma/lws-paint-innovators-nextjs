"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function OklahomaLocationMap() {
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
      center: { lat: 35.90345459063328, lng: -96.40633505910904 },
      zoom: 9,
    });

    // Array of multiple markers
    const markers = [
      {
        position: { lat: 36.173906145865516, lng: -95.85585727523274 },
        title: "Tulsa, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.06805202849144, lng: -95.83202544867682 },
        title: "Broken Arrow, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.47451757753207, lng: -97.52595306529908 },
        title: "Oklahoma City, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.95602510213747, lng: -96.0104214608628 },
        title: "Glenpool, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.02266946004217, lng: -95.96817224322307 },
        title: "Jenks, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.08270532531538, lng: -96.07534700639012 },
        title: "Oakhurst, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.26945517047108, lng: -95.85494274749057 },
        title: "Owasso, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.25167230296972, lng: -96.2666068310119 },
        title: "Prue, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.140037574972084, lng: -96.10551416356982 },
        title: "Sand Springs, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.29820326025107, lng: -95.99210417617728 },
        title: "Sperry, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.94264413083835, lng: -95.88237944702142 },
        title: "Bixby, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.133145425916766, lng: -96.35351168242883 },
        title: "Mannford, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.151316601068125, lng: -95.50999403839494 },
        title: "Inola, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.1858037729965, lng: -95.3456094753691 },
        title: "Chouteau, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.3090727096404, lng: -95.31866208796531 },
        title: "Pryor, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.74710945462614, lng: -95.97710809204806 },
        title: "Bartlesville, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.31181516646589, lng: -95.61388285116514 },
        title: "Claremore, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.18803295798573, lng: -96.49087792465986 },
        title: "Terlton, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.80308915858433, lng: -96.50714156103027 },
        title: "Depew, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.830782905229626, lng: -96.39214164471926 },
        title: "Brinstow, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.9861327865472, lng: -96.76753493087755 },
        title: "Cushing, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.988242404848805, lng: -96.59987944400076 },
        title: "Drumright, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.33830822001139, lng: -96.80401317755165 },
        title: "Pawnee, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.83030186618748, lng: -96.39090983312374 },
        title: "Bristow, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.82024383914737, lng: -95.67441758433763 },
        title: "Haskell, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 35.952583568173694, lng: -95.65175397533339 },
        title: "Cowetta, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.36821180344916, lng: -96.00572204234301 },
        title: "Sklatook, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.36516222872855, lng: -95.83809103541758 },
        title: "Collinsville, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.313699730235946, lng: -95.73888557991033 },
        title: "Limestone, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.18985481400503, lng: -95.744828219651 },
        title: "Catoosa, OK",
        description: "",
        link: "",
      },
      {
        position: { lat: 36.16841660151923, lng: -95.69705434642327 },
        title: "Fair Oaks, OK",
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
