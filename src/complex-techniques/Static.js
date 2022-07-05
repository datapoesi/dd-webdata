
const static_techniques = [
    {name: "User Agent", value: function() {return navigator.userAgent}}, // Chrome is phasing out support for User Agent, and will instead offer a new API called Client Hints.

    {name: "Storage", value: function() {return [!!window.sessionStorage && "sessionStorage", !!window.localStorage && "localStorage", !!window.indexedDB && "indexedDB"].filter(i => i).join(", ")}},

    {name: "Fullscreen available", value: function() {return document.fullscreenEnabled ? "Yes" : "No"}},

    {name: "Device memory", value: function() {return navigator.deviceMemory}}, // limited availability

    {name: "Hardware concurrency", value: function() {return navigator.hardwareConcurrency}},

    {name: "Do Not Track", value: function() {const doNotTrack = navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.doNotTrack === "yes" || navigator.msDoNotTrack === "1"; return doNotTrack ? "Yes" : "No"}},

    {name: "Session history", value: function() {return String(window.history.length)}},

    {name: "Cookies enabled", value: function() {return navigator.cookieEnabled ? "Yes" : "No"}},

    {name: "Heap memory limit", value: function() {return window.performance.memory ? window.performance.memory.jsHeapSizeLimit : undefined}},

    {name: "Webdriver", value: function() {return navigator.webdriver ? "Yes" : "No"}},

    {name: "Timezone", value: function() {return Intl.DateTimeFormat().resolvedOptions().timeZone || (new Date()).getTimezoneOffset() || undefined}},

    {name: "Referrer", value: function() {return document.referrer || "None"}}, // unreliable

    {name: "Color depth", value: function() {return window.screen.colorDepth}},

    {name: "Request response time", value: function() {const responseTime = (window.performance.timing.responseEnd - window.performance.timing.requestStart); return responseTime ? responseTime + "ms" : undefined}},
    // PerformanceTiming is deprecated. If necessary, replace with PerformanceNavigationTiming or chrome.csi().
    // let perf = performance.getEntriesByType("navigation")[0]; perf.duration; perf.requestStart - perf.responseStart;
    
    /* Too unreliable; I wasn't able to make it work consistently.
    {name: "Screen resolution", value: function() {
        let pixelRatio = window.devicePixelRatio || 1;
        if (pixelRatio > 1.5) {pixelRatio = 1};
        let normalized = [Math.round(window.screen.width * pixelRatio), Math.round(window.screen.height * pixelRatio)];
        return normalized.sort().reverse().join("x")}
    },*/

    {name: "Language", value: function() {let lang = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || undefined; return navigator.languages.includes(lang) ? navigator.languages.join(", ") : lang}},

    {name: "CSS Media features", value: function() {const mediaFeatures = ["display-mode: browser", "min-color: 6", "any-hover: none", "any-pointer: none", "color-gamut: srgb", "monochrome: 0", "prefers-color-scheme: no-preference", "prefers-reduced-motion: no-preference"].filter(feature => window.matchMedia("("+feature+")").matches); return `${mediaFeatures.length} out of 8`}},
    //return mediaFeatures.map(feature => window.matchMedia("("+feature+")").matches ? 1 : 0).join("")
    //color-gamut and min-color (color-index) are unsupported in Firefox.

    {name: "Time of visit", value: function() {let date = new Date(); let day = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date); return `${day}, ${date.toLocaleTimeString()}, ${date.getDate()}/${date.getMonth()+1}`}},

    {name: "Network info", value: function() {if (navigator.connection) {return ["rtt: "+navigator.connection.rtt, "downlink: "+navigator.connection.downlink, "effectiveType: "+navigator.connection.effectiveType, "saveData: "+ navigator.connection.saveData].join(" -- ")} else {return undefined}}},

    {name: "Page reloaded", value: function() {return (performance.getEntriesByType("navigation")[0].type) === "reload" ? "Yes" : "No"}},

    {name: "Screen orientation", value: function() {return window.screen.orientation.type || undefined}}, //window.matchMedia("(orientation: landscape/portrait)").matches;

    {name: "Touch device", value: function() {let isTouchDevice = window.matchMedia('(pointer: coarse)').matches; return isTouchDevice ? "Yes" : "No";}},

    {name: "Mobile device", value: function() {
        //var a = "undefined"==typeof window;
        if (window) {
            const n = window.navigator;
            const ua = n.userAgent;
            const isMobile = /android/i.test(ua) || /(iphone|ipod|ipad)/i.test(ua) || "iPad" === n.platform;
            return isMobile ? "Yes" : "No";
        } else {return "Unavailable"}}},
]


export default static_techniques
