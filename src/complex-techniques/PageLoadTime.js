import { useState, useEffect } from 'react';

function PageLoadTime() {
    const [loadtime, setLoadtime] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoadtime(window.performance.timing.loadEventEnd - window.performance.timing.navigationStart + "ms");
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return {
        name: "Page load time",
        value: loadtime
    }

};

export default PageLoadTime;