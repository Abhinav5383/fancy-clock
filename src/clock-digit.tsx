import { useEffect, useId, useRef, useState } from "react";
import { type Digit, getDigitConfig } from "./digits";

interface ClockDigitProps {
    digit: string | undefined;
}

export function ClockDigit(props: ClockDigitProps) {
    const digitCells = getDigitConfig(props.digit as Digit);
    return (
        <div className="cells-grid">
            {digitCells.map((row) => {
                return row.map((cell, i) => <DigitCell key={i} rotation={cell} />);
            })}
        </div>
    );
}

interface DigitComponentProps {
    rotation: [number, number];
}

function DigitCell(props: DigitComponentProps) {
    return (
        <div className="clock-cell">
            <span
                className="hand"
                style={{
                    // @ts-expect-error
                    "--rotation": `${props.rotation[0]}deg`,
                }}
            />
            <span
                className="hand"
                style={{
                    // @ts-expect-error
                    "--rotation": `${props.rotation[1]}deg`,
                }}
            />
        </div>
    );
}
