import { useState, useEffect } from 'react';

function SpeechSynthesisVoices() {
    const [voices, setVoices] = useState(null);
    
    useEffect(() => {
        function getSpeechVoices() {
            if (typeof speechSynthesis === 'undefined') return;
            let voices = speechSynthesis.getVoices();
            setVoices(voices.length);
        }
        getSpeechVoices();
        if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = getSpeechVoices;
        }
        return () => speechSynthesis.onvoiceschanged = null;
    }, [voices]);

    return {
        name: "Text-to-speech voices",
        value: voices
    }
}

export default SpeechSynthesisVoices