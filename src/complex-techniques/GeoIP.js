import { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime'

function GeoIPLookup() {
    const [geoIPData, setgeoIPData] = useState({query: 'Unavailable'});

    useEffect(() => {
        let ignore = false;
        async function fetchGeoIP(path) {
            const response = await fetch(path);
            if (response.ok) {
                if (!ignore) {
                    const data = await response.json();
                    setgeoIPData({
                        query: data.ip,
                        city: data.city,
                        region: data.region,
                        isp: data.isp,
                    })
                }
            } else { throw new Error(response.status) }
        }
        fetchGeoIP('/.netlify/functions/geoip')
        return () => { ignore = true; }
    }, []);
    
    const { query, city, region, isp} = geoIPData;
    return {
        name: "GeoIP lookup",
        value: isp ? `${query} -- ${city}, ${region} -- ${isp}` : `${query} -- The geoIP request was blocked.`
    }
}

export default GeoIPLookup