import { useState, useEffect } from 'react';

function ZoomLevel() {
    const [zoomLevel, setZoomLevel] = useState(null);
  
    useEffect(() => {
        setZoomLevel((window.devicePixelRatio * 100).toFixed(0))
        function handleZoom() {
            setZoomLevel((window.devicePixelRatio * 100).toFixed(0))
        }
        window.addEventListener('resize', handleZoom);
        return () => window.removeEventListener('resize', handleZoom);
    }, [zoomLevel]);

    return {
        name: "Zoom level (Chrome only)",
        value: `${zoomLevel}%`
    }
    
}

export default ZoomLevel

/* 
ALTERNATIVE ZOOM DETECTION
function getZoomValues() {
  const zoom = Math.round(((window.outerWidth) / window.innerWidth)*100) / 100;
  const device = Math.round(((window.outerWidth) / window.innerWidth)*100) / 100 * (window.devicePixelRatio || 1);
  console.log(parseFloat(zoom, 10).toFixed(2));
  console.log(parseFloat(device, 10).toFixed(2));
}
window.addEventListener('resize', getZoomValues);
*/
