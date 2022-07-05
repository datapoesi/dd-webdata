import { useState, useEffect } from 'react';

function AdBlocker() {
  const [adblocker, setAdblocker] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
        let img = document.createElement("img");
        img.src = "https://googleads.g.doubleclick.net/favicon.ico?" + new Date().getTime();
        // could also use "https://www.media.net/favicon.ico?" instead of or in addition to
        img.onerror = () => setAdblocker(true)
    }, 100);
  }, []);
  //Alternatively:
  /*fetch('https://www3.doubleclick.net', {method: 'HEAD', mode: 'no-cors', cache: 'no-store',})
        .then(() => console.log("not using adblocker."))
        .catch(() => console.log("using adblocker."));*/

  return {
    name: "Using Adblocker",
    value: adblocker ? "Yes" : "No"
  }
}

export default AdBlocker