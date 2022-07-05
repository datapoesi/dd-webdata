import { useState, useEffect } from 'react';

function Fullscreen() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(document.fullscreenEnabled ? "Yes" : "No")
    }, [value]);
    return { name: "Fullscreen available", value: value }
}

export default Fullscreen