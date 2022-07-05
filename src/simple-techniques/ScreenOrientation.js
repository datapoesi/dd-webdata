import { useState, useEffect } from 'react';

function ScreenOrientation() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(window.screen.orientation.type || undefined)
    }, [value]);
    return { name: "Screen orientation", value: value }
}

export default ScreenOrientation