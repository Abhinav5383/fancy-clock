export type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type clockHandAngles = [number, number];

const anglesTable = {
    "┌": [0, 90],
    "┐": [90, 180],
    "┘": [180, 270],
    "└": [0, 270],
    "-": [0, 180],
    "|": [90, 270],
    ".": [135, 135],
} as const satisfies Record<string, clockHandAngles>;
type validHandAngles = keyof typeof anglesTable;

// 4x6 grid of clock with 2 hands
const DIGITS_CONFIG = {
    "0": `
┌--┐
|┌┐|
||||
||||
|└┘|
└--┘`,
    "1": `
┌-┐.
└┐|.
.||.
.||.
┌┘└┐
└--┘`,
    "2": `
┌--┐
└-┐|
┌-┘|
|┌-┘
|└-┐
└--┘`,
    "3": `
┌--┐
└-┐|
.┌┘|
.└┐|
┌-┘|
└--┘`,
    "4": `
┌┐┌┐
||||
|└┘|
└-┐|
..||
..└┘`,
    "5": `
┌--┐
|┌-┘
|└-┐
└-┐|
┌-┘|
└--┘`,
    "6": `
┌--┐
|┌-┘
|└-┐
|┌┐|
|└┘|
└--┘`,
    "7": `
┌--┐
└-┐|
..||
..||
..||
..└┘`,
    "8": `
┌--┐
|┌┐|
|└┘|
|┌┐|
|└┘|
└--┘`,
    "9": `
┌--┐
|┌┐|
|└┘|
└-┐|
┌-┘|
└--┘`,
} as const satisfies Record<Digit, string>;

export function getDigitConfig(digit: Digit) {
    const data = DIGITS_CONFIG[digit];
    if (!data) throw new Error(`Invalid Digit: '${digit}'`);

    const rows = data.trim().replaceAll(" ", "").split("\n");
    const clockAngles: clockHandAngles[][] = [];

    for (const row of rows) {
        const cells = row.split("") as validHandAngles[];
        clockAngles.push([]);
        for (const cell of cells.slice(0, 4)) {
            const handConfig = anglesTable[cell];
            if (handConfig) clockAngles[clockAngles.length - 1].push(handConfig);
        }
    }

    return clockAngles;
}
