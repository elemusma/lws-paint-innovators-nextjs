'use client';

import { useEffect, useRef, useState } from 'react';

export default function KansasMissouriMap() {
  const overlayMapRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const mapToggleRef = useRef<HTMLAnchorElement>(null);
  const [isMapInteractive, setIsMapInteractive] = useState(false);

  // Update pointer-events when interactive state changes
  useEffect(() => {
    const overlayMap = overlayMapRef.current;
    if (overlayMap) {
      overlayMap.style.pointerEvents = isMapInteractive ? 'auto' : 'none';
    }
  }, [isMapInteractive]);

  // Set up event listeners and resize logic
  useEffect(() => {
    const overlayMap = overlayMapRef.current;
    const mapIframe = iframeRef.current;

    if (!overlayMap || !mapIframe) {
      return;
    }

    // Resize map function to maintain aspect ratio
    const resizeMap = () => {
      if (mapIframe) {
        const aspectRatio = 640 / 300;
        mapIframe.style.width = '100%';
        mapIframe.style.height = `${mapIframe.offsetWidth / aspectRatio}px`;
      }
    };

    // Handle window load and resize events
    window.addEventListener('load', resizeMap);
    window.addEventListener('resize', resizeMap);
    resizeMap();

    // Handle Ctrl/Cmd key to temporarily enable interaction
    const handleKeyDown = (e: Event) => {
      const keyEvent = e as KeyboardEvent;
      if (keyEvent.ctrlKey || keyEvent.metaKey) {
        overlayMap.style.pointerEvents = 'auto';
      }
    };

const handleKeyUp = () => {
  if (!isMapInteractive) {
    overlayMap.style.pointerEvents = 'none';
  }
};

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('load', resizeMap);
      window.removeEventListener('resize', resizeMap);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isMapInteractive]);

  const handleToggleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMapInteractive((prev) => !prev);
  };

  return (
    <div className="overlay-map-hover">
      <a
        ref={mapToggleRef}
        href="#"
        className="map-toggle"
        style={{ display: 'block', marginTop: '10px' }}
        onClick={handleToggleClick}
      >
        {isMapInteractive
          ? 'Click here to hide map interaction'
          : 'Click here to interact with map'}
      </a>
      <div ref={overlayMapRef} className="overlay-map" style={{ pointerEvents: 'none' }}>
        <iframe
          ref={iframeRef}
          src="https://www.google.com/maps/d/u/0/embed?mid=1ExkCD0oziBFu8x2afD8DstVHQ9bAMGU&ehbc=2E312F&noprof=1"
          width="640"
          height="300"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
}