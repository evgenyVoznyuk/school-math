type _To<T extends number, R extends unknown[]> = R['length'] extends T
    ? R[number]
    : _To<T, [R['length'], ...R]>;
type TTo<T extends number> = number extends T ? number :_To<T, []>;
type TRange<T extends number, K extends number> = Exclude<TTo<K>, TTo<T>>;

type TOneDigit = TRange<1, 10>;
type TTwoDigit = TRange<10, 100>;
type TMultiplier = 1 | 10;

type TOneDigitRange<T extends number, K extends number> = Extract<TRange<T, K>, TOneDigit>;
type TTwoDigitRange<T extends number, K extends number> = Extract<TRange<T, K>, TTwoDigit>;
type TDec = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
type TNotDec = Exclude<TTwoDigit, TDec>;
type TDecRange<T extends number, K extends number> = Extract<TDec, TTwoDigitRange<T, K>>;
type TNotDecRange<T extends number, K extends number> = Exclude<TTwoDigitRange<T, K>, TDec>;

type TGetOne = (min: TOneDigit, max: TOneDigit) => number;
type TGetDec = (min: TTwoDigit, max: TTwoDigit) => number;
type TGetNotDec = (min: TTwoDigit, max: TTwoDigit) => number;

type TGetNumberArgs = {
    one: TOneDigit,
    notDec: TTwoDigit,
    dec: TTwoDigit,
}

type TVariants = { [K in keyof TGetNumberArgs]: (min: TGetNumberArgs[K], max: TGetNumberArgs[K]) => number }

type TGetNumber = <K extends keyof TVariants>(key: K, min: TGetNumberArgs[K], max: TGetNumberArgs[K]) => number;

export { TOneDigit, TTwoDigit, TMultiplier, TGetOne, TGetDec, TGetNotDec, TVariants, TGetNumber };