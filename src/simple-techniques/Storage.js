import { useState, useEffect } from 'react';

function Storage() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue([!!window.sessionStorage && "sessionStorage", !!window.localStorage && "localStorage", !!window.indexedDB && "indexedDB"].filter(i => i).join(", "))
    }, [value]);
    return { name: "Storage", value: value }
}

export default Storage