type TTask = {
    name: string,
    routeName: string,
    generator: () => void,
}

const tasks: TTask[] = [
    {
        name: 'twoAddOne',
        routeName: '36+2',
        generator: () => {},
    },
    {
        name: 'twoAddDec',
        routeName: '36+20',
        generator: () => {},
    },
    {
        name: 'twoSubOne',
        routeName: '36-2',
        generator: () => {},
    },
    {
        name: 'twoSubDec',
        routeName: '36-20',
        generator: () => {},
    },
    {
        name: 'decSubOne',
        routeName: '60-7',
        generator: () => {},
    },
    {
        name: 'decSubTwo',
        routeName: '60-24',
        generator: () => {},
    },
]
export { tasks };