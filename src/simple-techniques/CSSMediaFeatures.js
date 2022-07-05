import { useState, useEffect } from 'react';

function CSSMediaFeatures() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        const mediaFeatures = ["display-mode: browser", "min-color: 6", "any-hover: none", "any-pointer: none", "color-gamut: srgb", "monochrome: 0", "prefers-color-scheme: no-preference", "prefers-reduced-motion: no-preference"].filter(feature => window.matchMedia("(" + feature + ")").matches)
        setValue(`${mediaFeatures.length} out of 8`)
    }, [value]);
    return { name: "CSS Media features", value: value }
}

export default CSSMediaFeatures