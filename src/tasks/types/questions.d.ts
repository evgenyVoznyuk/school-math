import { TGiven, TSign } from "@/tasks/types/simple";
import { TDigits, TGetNumber } from "@/tasks/types/generators";

type TQuestionText = `${TDigits} ${TSign} ${TDigits} = ?`

type TQuestion = {
    text: TQuestionText,
    answer: number,
};

type TGetNumbers = (given: TGiven) => {
    firstNumber: ReturnType<TGetNumber>,
    sign: TSign,
    secondNumber: ReturnType<TGetNumber>,
};
type TGetQuestion = (given: TGiven) => TQuestion;

export { TQuestion, TGetNumbers, TGetQuestion };