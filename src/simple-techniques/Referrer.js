import { useState, useEffect } from 'react';

function Referrer() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(document.referrer || "None")
    }, [value]);
    return { name: "Referrer", value: value }
}

export default Referrer