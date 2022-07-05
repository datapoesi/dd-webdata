import { useState, useEffect } from 'react';

function CookiesEnabled() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(navigator.cookieEnabled ? "Yes" : "No")
    }, [value]);
    return { name: "Cookies enabled", value: value }
}

export default CookiesEnabled