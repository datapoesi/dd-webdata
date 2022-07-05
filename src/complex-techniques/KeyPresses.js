import { useState, useEffect } from 'react';

function KeyPresses() {
    const [keypresses, setKeypresses] = useState(0);
    const [lastKeypress, setLastKeypress] = useState(null);
    
    useEffect(() => {
        function handleKeydown(event) {
            setKeypresses(keypresses + 1)
            setLastKeypress(`${event.code} (${event.keyCode})`)
        }
        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [keypresses, lastKeypress]);

    return {
        name: "Key presses",
        value: keypresses ? `${keypresses}, with latest key press being: ${lastKeypress}` : "None yet."
    }
    
}

export default KeyPresses