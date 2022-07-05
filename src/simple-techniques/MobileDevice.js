import { useState, useEffect } from 'react';

function MobileDevice() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        if (window) {
            const n = window.navigator;
            const ua = n.userAgent;
            const isMobile = /android/i.test(ua) || /(iphone|ipod|ipad)/i.test(ua) || "iPad" === n.platform;
            setValue(isMobile ? "Yes" : "No")
        }
    }, [value]);
    return { name: "Mobile device", value: value }
}

export default MobileDevice