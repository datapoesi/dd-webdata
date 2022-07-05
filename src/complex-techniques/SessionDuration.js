import { useState, useEffect } from 'react';

function SessionDuration() {
    const [sessionDuration, setSessionDuration] = useState(0);
    
    useEffect(() => {
        // Alternatively use performance.now() or document.timeline.
        // Something like Math.floor((performance.now()/60000))
        let durationInterval = setInterval(() => {
            setSessionDuration(sessionDuration + 1)
        }, 60000);
        return () => clearInterval(durationInterval);
    }, [sessionDuration]);

    return {
        name: "Session duration",
        value: sessionDuration + " minutes"
    }
    
}

export default SessionDuration