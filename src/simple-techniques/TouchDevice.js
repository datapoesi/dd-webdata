import { useState, useEffect } from 'react';

function TouchDevice() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        let isTouchDevice = window.matchMedia('(pointer: coarse)').matches
        setValue(isTouchDevice ? "Yes" : "No")
    }, [value]);
    return { name: "Touch device", value: value }
}

export default TouchDevice