import type { TNumberKey } from "@/types/tasks";

const getRandomMultipleBy = (min: number, max: number, multiplier: number = 1) => {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor((Math.random() * (maxInt - minInt) + minInt) / multiplier) * multiplier;
}

const getOne = (min: number = 1 , max: number = 10): number => {
    if (min < 1) min = 1;
    if (max > 10) max = 10;
    if (max < min) throw new Error('max < min');
    return getRandomMultipleBy(min, max);
}
const getMultipleByTen = (min: number = 10, max: number = 91): number => {
    if (min < 10) min = 10;
    if (max > 91) max = 91;
    if (max < min) throw new Error('max < min');
    return getRandomMultipleBy(min, max, 10);
}
const getNotMultipleByTen = (min: number, max: number): number => getMultipleByTen(min, max) + getOne(1, 10);

const variants: {[key: string]: (min: number, max: number) => number} = {
    one: getOne,
    two: getNotMultipleByTen,
    dec: getMultipleByTen,
};
const getNumber = (key: TNumberKey, min: number, max: number): number => variants[key](min, max);

export { getNumber };


