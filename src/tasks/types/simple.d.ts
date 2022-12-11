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

export { TSign, TTaskNumbers, TTask };