import { getNumber } from "../tasks/generators";
import type { TDigits } from "../tasks/types/generators";
import type { TGiven } from "../tasks/types/simple";
import type { TGetNumbers, TGetQuestion } from "../tasks/types/questions";

const getNumbers : TGetNumbers = (given: TGiven) => {
    const { first, second, max, min, sign } = given;
    const firstNumber = getNumber(first, min, max);
    let secondMax;
    if (sign === '-') secondMax = firstNumber;
    else if (sign === '+') secondMax = max - firstNumber;
    const secondNumber = getNumber(second, 1, secondMax as TDigits);
    return { firstNumber, sign, secondNumber };
}

const getQuestion : TGetQuestion = (given: TGiven) => {
    const { firstNumber, sign, secondNumber } = getNumbers(given);
    let answer;
    if (sign === '-') answer = firstNumber - secondNumber;
    else if (sign === '+') answer = firstNumber + secondNumber;
    return {
        text: `${firstNumber} ${sign} ${secondNumber} = ?`,
        answer,
    }
};

export { getQuestion };