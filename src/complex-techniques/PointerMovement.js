import { useState, useEffect } from 'react';

function PointerMovement() {
    const [pointerMovement, setPointerMovement] = useState(0);
    
    useEffect(() => {
        function handleMovement(event) {
            const movement = `${Math.trunc(event.clientX || 0)}x${Math.trunc(event.clientY || 0)}`
            setPointerMovement(movement)
        }
        window.addEventListener('pointermove', handleMovement);
        return () => window.removeEventListener('pointermove', handleMovement);
    }, [pointerMovement]);

    return {
        name: "Pointer movement",
        value: pointerMovement || "None yet"
    }
    
}

export default PointerMovement