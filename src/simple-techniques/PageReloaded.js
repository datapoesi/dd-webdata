import { useState, useEffect } from 'react';

function PageReloaded() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue((performance.getEntriesByType("navigation")[0].type) === "reload" ? "Yes" : "No")
    }, [value]);
    return { name: "Page reloaded", value: value }
}

export default PageReloaded