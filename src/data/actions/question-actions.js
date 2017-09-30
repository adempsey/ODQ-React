import QuestionActionTypes from './question-action-types';
import Dispatcher from '../dispatcher';

const QuestionActions = {
    createQuestion(text, answers) {
        Dispatcher.dispatch({
            type: QuestionActionTypes.CREATE_QUESTION,
            text,
            answers
        });
    }
}

export default QuestionActions;
