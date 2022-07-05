import { useState, useEffect } from 'react';

function Clicks() {
    const [clicks, setClicks] = useState(0);
    const [lastClick, setLastClick] = useState({clientX: 0, clientY: 0});
    
    useEffect(() => {
        function handleClicks(event) {
            setClicks(clicks + 1)
            setLastClick(`${event.clientX}x${event.clientY}`)
        }
        window.addEventListener('mousedown', handleClicks);
        return () => window.removeEventListener('mousedown', handleClicks);
    }, [clicks, lastClick]);
    
    return {
        name: "Clicks",
        value: clicks ? clicks + `, with latest click at: ${lastClick}` : "None yet."
    }
}

export default Clicks