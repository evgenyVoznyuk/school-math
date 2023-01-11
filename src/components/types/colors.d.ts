// type THexDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' |
//     'a' | 'b' | 'c' | 'd' | 'e'| 'f' |
//     'A' | 'B' | 'C' | 'D' | 'E'| 'F';
// type THex<T extends string> = T extends `#${THexDigit}${THexDigit}${THexDigit}${infer LastDigits}`
//         ? LastDigits extends '' ? T : LastDigits extends `${THexDigit}${THexDigit}${THexDigit}` ? T : never
//         : never;

// for now only poor hex and others

type TRGB = `rgb(${number}, ${number}, ${number})`;
type TRGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type THEX = `#${string}`;

type TColor = TRGB | TRGBA | THEX;

export { TColor };