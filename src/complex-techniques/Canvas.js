import { useState, useEffect } from 'react';

function CanvasData() {
    const [canvasHash, setCanvasData] = useState(null);
  
    useEffect(() => {
        let canvas = document.createElement("canvas")
        let context = canvas.getContext("2d")
        if (!context) return;
        canvas.width = 320
        canvas.height = 200
        context.font = "14px 'Arial'"
        context.fillStyle = "#f60"
        context.fillRect(20, 1, 62, 100)
        context.fillStyle = "#069"
        context.fillText("MNOP_dahlberg~1!2@", 2, 15);
        context.fillStyle = "rgba(102, 204, 0, 0.7)"
        context.fillText("MNOP_dahlberg~1!2@", 4, 45)
        context.fillStyle = "rgb(255,0,255)"
        context.fillRect(200, 1, 62, 100)
        let data = canvas.toDataURL();
        let hash = 0;
        for (let i = 0; i < data.length; i++) {
            hash = (((hash<<5) - hash) + data.charCodeAt(i));
        }
        setCanvasData((hash&0xFFFFFFFF).toString(16))
  }, []);

  return {
    name: "Canvas hash",
    value: canvasHash
  }
}

export default CanvasData