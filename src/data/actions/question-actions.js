import QuestionActionTypes from './question-action-types';
import Dispatcher from '../dispatcher';

const QuestionActions = {
    createQuestion(index, text, answers) {
        Dispatcher.dispatch({
            type: QuestionActionTypes.CREATE_QUESTION,
            index,
            text,
            answers
        });
    }
}

export default QuestionActions;
