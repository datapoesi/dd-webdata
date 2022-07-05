import { useState, useEffect } from 'react';

function getBatteryLevel(battery) {
    const level = Math.floor(battery.level * 100)
    const charging = battery.charging ? "charging" : "discharging"
    return `${level}% and ${charging}`
}

function useBatteryLevel() {
    const [batteryLevel, setBatteryLevel] = useState(null);

    useEffect(() => {
        let isSubscribed = true
        if ('getBattery' in navigator) {
            navigator.getBattery()
                .then(getBatteryLevel)
                .then(data => {
                    if (isSubscribed) setBatteryLevel(data);
                })
        }
        return () => isSubscribed = false
    }, [])

    return {
        name: "Battery level",
        value: batteryLevel
    }
};

export default useBatteryLevel;