type TNumberKey = 'one' | 'two' | 'dec';
type TSign = '-' | '+';
type TTaskNumbers = {
    first: TNumberKey,
    second: TNumberKey,
    sign: TSign,
};
type TTask = {
    name: string,
    numbers: TNumbers,
};

export { TNumberKey, TSign, TTaskNumbers, TTask };