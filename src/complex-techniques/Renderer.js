import { useState, useEffect } from 'react';

function Renderer() {
    const [renderer, setRenderer] = useState(null);
    
    useEffect(() => {
        if (window.WebGLRenderingContext || window.WebGL2RenderingContext) {
            let canvas = document.createElement("canvas");
            let webgl = canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl2") || canvas.getContext("experimental-webgl");
            let rendererData = webgl.getParameter(webgl.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL)
            setRenderer(rendererData)
        }
    }, []);

    return {
        name: "Renderer",
        value: renderer
    }
    
}

export default Renderer

