import { useState, useEffect } from 'react';

function Timezone() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(Intl.DateTimeFormat().resolvedOptions().timeZone || (new Date()).getTimezoneOffset() || undefined)
    }, [value]);
    return { name: "Timezone", value: value }
}

export default Timezone