import type {
    TOneDigit,
    TTwoDigit,
    TMultiplier,
    TGetOne,
    TGetDec,
    TGetNotDec,
    TVariants,
    TGetNumber,
} from "../tasks/types/generators";

const getRandomMultipleBy = (min: number, max: number, multiplier: TMultiplier) => {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max) + 1;
    return Math.floor((Math.random() * (maxInt - minInt) + minInt) / multiplier) * multiplier;
}

const getOne : TGetOne = (min: TOneDigit, max : TOneDigit) => {
    const minInt = Math.max(1, min);
    const maxInt = Math.min(9, max);
    if (maxInt < minInt) throw new Error('max < min');
    if (minInt === maxInt) return minInt;
    return getRandomMultipleBy(minInt, maxInt, 1);
}
const getDec : TGetDec = (min: TTwoDigit, max: TTwoDigit) => {
    const minInt = Math.max(10, min);
    const maxInt = Math.min(90, max);
    if (maxInt < minInt) throw new Error('max < min');
    if (
        minInt % 10 !== 0 &&
        maxInt % 10 !== 0 &&
        (Math.floor(maxInt / 10) - Math.floor(minInt / 10)) === 0
    ) throw new Error('no dec in min-max range');
    if (minInt === maxInt) return minInt;
    return getRandomMultipleBy(minInt, maxInt, 10);
}
const getNotDec : TGetNotDec = (min: TTwoDigit, max: TTwoDigit) => {
    const minInt = Math.max(10, min) as TTwoDigit;
    const maxInt = Math.min(99, max) as TTwoDigit;
    if (maxInt < minInt) throw new Error('max < min');
    if (minInt === maxInt) return minInt;
    const dozen = getDec(minInt, maxInt);
    const unitsMax = maxInt % 10;
    const unit = unitsMax === 0 ? 0 : getOne(1, unitsMax as TOneDigit)
    return dozen + unit;
}

const variants: TVariants = {
    one: getOne,
    notDec: getNotDec,
    dec: getDec,
};

const getNumber : TGetNumber = (key, min, max) => variants[key](min, max);

export { getNumber };


