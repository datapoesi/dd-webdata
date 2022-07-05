import { useState, useEffect } from 'react';

function MouseWheel() {
    const [mouseWheels, setMouseWheels] = useState(0);
    
    useEffect(() => {
        const handleWheels = () => setMouseWheels(mouseWheels + 1);
        window.addEventListener('wheel', handleWheels);
        return () => window.removeEventListener('wheel', handleWheels);
    }, [mouseWheels]);

    return {
        name: "Mouse wheel events",
        value: mouseWheels || "None yet."
    }
    
}

export default MouseWheel