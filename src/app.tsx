import { useEffect, useState } from "react";
import { ClockDigit } from "./clock-digit";
import "./clock.css";

export default function App() {
    const [time, setTime] = useState(getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main>
            <div className="clock-container">
                <div className="time-box">
                    <ClockDigit digit={time.h[0]} />
                    <ClockDigit digit={time.h[1]} />
                </div>
                <div className="time-box">
                    <ClockDigit digit={time.m[0]} />
                    <ClockDigit digit={time.m[1]} />
                </div>
                <div className="time-box">
                    <ClockDigit digit={time.s[0]} />
                    <ClockDigit digit={time.s[1]} />
                </div>
            </div>
        </main>
    );
}

function getTime() {
    const date = new Date();
    return {
        h: date.getHours().toString().padStart(2, "0").split(""),
        m: date.getMinutes().toString().padStart(2, "0").split(""),
        s: date.getSeconds().toString().padStart(2, "0").split(""),
    };
}
