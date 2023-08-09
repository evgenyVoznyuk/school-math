import { TOneDigit, TTwoDigit, TGetNumberArgs } from './generators'
type TNumberKey = keyof TGetNumberArgs;
type TSign = '-' | '+' | 'x' | '/';
type TGiven = {
    first: TNumberKey,
    second: TNumberKey,
    max: TOneDigit | TTwoDigit,
    min: TOneDigit | TTwoDigit,
    sign: TSign,
};
type TTask = {
    name: string,
    given: TGiven,
};

export { TSign, TGiven, TTask };