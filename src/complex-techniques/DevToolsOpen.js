import { useState, useEffect } from 'react';

function DevToolsOpen() {
    const [isOpen, setIsOpen] = useState(false);
    const [orientation, setOrientation] = useState(null);
    
    useEffect(() => {
        function isDevToolsOpen() {
            const threshold = 180; 
            // Consider changing the threshold to something relative
            // like (window.outerHeight * 0.2) and (window.outerWidth * 0.1)
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;
            if (heightThreshold ^ widthThreshold) { // xor
                setIsOpen(true)
                setOrientation(widthThreshold ? 'vertically' : 'horizontally')
            } else {
                setIsOpen(false)
                setOrientation(null)
            }
        }
        window.addEventListener('resize', isDevToolsOpen);
        return () => window.removeEventListener('resize', isDevToolsOpen);
    }, [isOpen, orientation]);

    return {
        name: "Developer tools open",
        value: isOpen ? `Yes, ${orientation}` : `No`
    }
}

export default DevToolsOpen