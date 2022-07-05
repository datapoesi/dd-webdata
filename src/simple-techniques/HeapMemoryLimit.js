import { useState, useEffect } from 'react';

function HeapMemoryLimit() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(window.performance.memory ? window.performance.memory.jsHeapSizeLimit : undefined)
    }, [value]);
    return { name: "Heap memory limit", value: value }
}

export default HeapMemoryLimit