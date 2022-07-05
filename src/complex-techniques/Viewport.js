import { useState, useEffect } from 'react';

function getWindowDimensions() {
  //Chrome alternative: window.visualViewport
  //outerWidth and outerHeight for browser window size.
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(null);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions())
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    name: "Viewport",
    value: windowDimensions ? `${windowDimensions.width}x${windowDimensions.height}` : null
  }
}

export default useWindowDimensions