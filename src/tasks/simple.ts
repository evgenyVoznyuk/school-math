import type { TTask } from '../tasks/types/simple';

const tasks: TTask[] = [
    {
        name: '36+2',
        numbers: {
            first: 'notDec',
            second: 'one',
            sign: '+',
        },
    },
    {
        name: '36+20',
        numbers: {
            first: 'notDec',
            second: 'dec',
            sign: '+',
        },
    },
    {
        name: '36-2',
        numbers: {
            first: 'notDec',
            second: 'one',
            sign: '-',
        },
    },
    {
        name: '36-20',
        numbers: {
            first: 'notDec',
            second: 'dec',
            sign: '-',
        },
    },
    {
        name: '60-7',
        numbers: {
            first: 'dec',
            second: 'one',
            sign: '-',
        },
    },
    {
        name: '60-24',
        numbers: {
            first: 'dec',
            second: 'notDec',
            sign: '-',
        },
    },
];

//TODO change to smth meaningful
const defaultTask = {
    name: '60-24',
    numbers: {
        first: 'dec',
        second: 'two',
        sign: '-',
    },
}

const getTaskByName = (name: string) => tasks.find(t => name === t.name) ?? defaultTask;

export { tasks, getTaskByName };