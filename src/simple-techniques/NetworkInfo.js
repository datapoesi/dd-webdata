import { useState, useEffect } from 'react';

function NetworkInfo() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        let connection = navigator.connection && ["rtt: " + navigator.connection.rtt, "downlink: " + navigator.connection.downlink, "effectiveType: " + navigator.connection.effectiveType, "saveData: " + navigator.connection.saveData].join(" -- ")
        setValue(connection || undefined)
    }, [value]);
    return { name: "Network info", value: value }
}

export default NetworkInfo