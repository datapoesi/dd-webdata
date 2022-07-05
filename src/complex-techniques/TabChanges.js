import { useState, useEffect } from 'react';

function TabChanges() {
    const [tabChanges, setTabChanges] = useState(0);
    
    useEffect(() => {
        function handleTabchanges() {
            if (document.hidden) {
                setTabChanges(tabChanges + 1)
            }
        }
        window.addEventListener('visibilitychange', handleTabchanges);
        return () => window.removeEventListener('visibilitychange', handleTabchanges);
    }, [tabChanges]);

    return {
        name: "Tab changes",
        value: tabChanges || "None yet."
    }
    
}

export default TabChanges