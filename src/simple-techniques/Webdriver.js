import { useState, useEffect } from 'react';

function Webdriver() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(navigator.webdriver ? "Yes" : "No")
    }, [value]);
    return { name: "Webdriver", value: value }
}

export default Webdriver