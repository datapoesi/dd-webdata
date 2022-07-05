import { useState, useEffect } from 'react';

function TimeOfVisit() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        let date = new Date(); let day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
        setValue(`${day}, ${date.toLocaleTimeString()}, ${date.getDate()}/${date.getMonth() + 1}`)
    }, [value]);
    return { name: "Time of visit", value: value }
}

export default TimeOfVisit