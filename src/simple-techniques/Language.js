import { useState, useEffect } from 'react';

function Language() {
    const [value, setValue] = useState(null);
    useEffect(() => {
        let lang = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || undefined
        setValue(navigator.languages.includes(lang) ? navigator.languages.join(", ") : lang)
    }, [value]);
    return { name: "Language", value: value }
}

export default Language