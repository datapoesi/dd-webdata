import { useState, useEffect } from 'react';

function ColorDepth() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(window.screen.colorDepth)
    }, [value]);
    return { name: "Color depth", value: value }
}

export default ColorDepth