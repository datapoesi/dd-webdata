import { useState, useEffect } from 'react';

function HardwareConcurrency() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(navigator.hardwareConcurrency)
    }, [value]);
    return { name: "Hardware concurrency", value: value }
}

export default HardwareConcurrency