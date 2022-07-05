import { useState, useEffect } from 'react';

function AudioContext() {
  const [audioData, setAudioData] = useState(null);
  
  useEffect(() => {
    let AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (AudioContext == null) return;
    let audioContext = new AudioContext(1, 44100, 44100)
    let destination = audioContext.destination
    let oscillator = audioContext.createOscillator()

    oscillator.type = 'triangle'
    oscillator.frequency.setValueAtTime(10000, audioContext.currentTime)
    let compressor = audioContext.createDynamicsCompressor();
    compressor.threshold && (compressor.threshold.value = -50);
    compressor.knee && (compressor.knee.value = 40);
    compressor.attack && (compressor.attack.value = 0);
    
    oscillator.connect(compressor)
    compressor.connect(destination)
    oscillator.start(0)
    audioContext.startRendering()

    function handleAudioData(event) {
        const audioData = `${(audioContext.sampleRate).toString()}_${destination.maxChannelCount}_${destination.numberOfInputs}_${destination.numberOfOutputs}_${destination.channelCount}_${destination.channelCountMode}_${destination.channelInterpretation}`;

        let audioFP = event.renderedBuffer.getChannelData(0)
            .slice(4500, 5000)
            .reduce((acc, val) => acc + Math.abs(val), 0)
            .toString()

        oscillator.disconnect()
        compressor.disconnect()
        setAudioData(`${audioFP} -- ${audioData}`)
    }

    audioContext.addEventListener("complete", handleAudioData)
    return () => { audioContext.removeEventListener("complete", handleAudioData) }
  }, []);

  return {
    name: "Audio data",
    value: audioData
  }

}

export default AudioContext

