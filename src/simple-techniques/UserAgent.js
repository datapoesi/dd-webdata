import { useState, useEffect } from 'react';

function UserAgent() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(navigator.userAgent)
    }, [value]);
    return { name: "User Agent", value: value }
}

export default UserAgent