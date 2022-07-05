import { useState, useEffect } from 'react';

function DeviceMemory() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(navigator.deviceMemory)
    }, [value]);
    return { name: "Device memory", value: value }
}

export default DeviceMemory