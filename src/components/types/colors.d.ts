// type HexDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' |
//     'a' | 'b' | 'c' | 'd' | 'e'| 'f' |
//     'A' | 'B' | 'C' | 'D' | 'E'| 'F';
// type Hex<T extends string> = T extends `#${HexDigit}${HexDigit}${HexDigit}${infer LastDigits}`
//         ? LastDigits extends '' ? T : LastDigits extends `${HexDigit}${HexDigit}${HexDigit}` ? T : never
//         : never;

// for now only poor hex and others

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

export { Color };