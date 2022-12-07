import type { TTask } from "@/types/tasks";

const tasks: TTask[] = [
    {
        name: '36+2',
        numbers: {
            first: 'two',
            second: 'one',
            sign: '+',
        },
    },
    {
        name: '36+20',
        numbers: {
            first: 'two',
            second: 'dec',
            sign: '+',
        },
    },
    {
        name: '36-2',
        numbers: {
            first: 'two',
            second: 'one',
            sign: '-',
        },
    },
    {
        name: '36-20',
        numbers: {
            first: 'two',
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
            second: 'two',
            sign: '-',
        },
    },
];

const getTaskByName = (name: string) => tasks.find(t => name === t.name);

export { tasks, getTaskByName };