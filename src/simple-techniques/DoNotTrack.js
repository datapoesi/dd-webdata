import { useState, useEffect } from 'react';

function DoNotTrack() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        const doNotTrack = navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.doNotTrack === "yes" || navigator.msDoNotTrack === "1"
        setValue(doNotTrack ? "Yes" : "No")
    }, [value]);
    return { name: "Do Not Track", value: value }
}

export default DoNotTrack