interface ClockDigitProps {
    digit: string;
}

export function ClockDigit(props: ClockDigitProps) {
    return <div>{props.digit}</div>;
}

interface DigitComponentProps {
    rotation: [number, number];
}

function DigitPart(props: DigitComponentProps) {
    return (
        <div>
            {props.rotation[0]} - {props.rotation[1]}
        </div>
    );
}
