import { useState, useEffect } from 'react';

function SessionHistory() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(String(window.history.length))
    }, [value]);
    return { name: "Session history", value: value }
}

export default SessionHistory