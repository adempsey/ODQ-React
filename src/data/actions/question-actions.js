import QuestionActionTypes from './question-action-types';
import Dispatcher from '../dispatcher';

const QuestionActions = {
    createQuestion(text, answers) {
        Dispatcher.dispatch({
            type: QuestionActionTypes.CREATE_QUESTION,
            text,
            answers
        });
    },

    advanceQuestion() {
        Dispatcher.dispatch({
            type: QuestionActionTypes.ADVANCE_QUESTION
        })
    },

    previousQuestion() {
        Dispatcher.dispatch({
            type: QuestionActionTypes.PREVIOUS_QUESTION
        })
    },

    selectAnswer(questionID, answerIndex) {
        Dispatcher.dispatch({
            type: QuestionActionTypes.SELECT_ANSWER,
            questionID,
            answerIndex
        })
    }
}

export default QuestionActions;
