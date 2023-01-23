import type { TTask } from '../tasks/types/simple';

const tasks: TTask[] = [
    {
        name: '36+2',
        given: {
            first: 'notDec',
            second: 'one',
            max: 99,
            min: 21,
            sign: '+',
        },
    },
    {
        name: '36+20',
        given: {
            first: 'notDec',
            second: 'dec',
            max: 99,
            min: 21,
            sign: '+',
        },
    },
    {
        name: '36-2',
        given: {
            first: 'notDec',
            second: 'one',
            max: 99,
            min: 21,
            sign: '-',
        },
    },
    {
        name: '36-20',
        given: {
            first: 'notDec',
            second: 'dec',
            max: 99,
            min: 21,
            sign: '-',
        },
    },
    {
        name: '60-7',
        given: {
            first: 'dec',
            second: 'one',
            max: 99,
            min: 20,
            sign: '-',
        },
    },
    {
        name: '60-24',
        given: {
            first: 'dec',
            second: 'notDec',
            max: 99,
            min: 20,
            sign: '-',
        },
    },
];

//TODO change to smth meaningful
const defaultTask : TTask = {
    name: '60-24',
    given: {
        first: 'dec',
        second: 'notDec',
        max: 99,
        min: 20,
        sign: '-',
    },
}

const getTaskByName = (name: string) => tasks.find(t => name === t.name) ?? defaultTask;

export { tasks, getTaskByName };