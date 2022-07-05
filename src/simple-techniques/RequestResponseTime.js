import { useState, useEffect } from 'react';

function RequestResponseTime() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        const responseTime = (window.performance.timing.responseEnd - window.performance.timing.requestStart)
        setValue(responseTime ? responseTime + "ms" : undefined)
    }, [value]);
    return { name: "Request response time", value: value }
}

export default RequestResponseTime