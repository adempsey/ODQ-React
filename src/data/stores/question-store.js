import Counter from '../../helpers/counter';
import Dispatcher from '../dispatcher';
import Immutable from 'immutable';
import Question from '../models/question-model';
import { ReduceStore } from 'flux/utils';
import QuestionActionTypes from '../actions/question-action-types'

class QuestionStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case QuestionActionTypes.CREATE_QUESTION:
                if (!action.text) {
                    return state;
                }

                var id = Counter.increment();
                return state.set(id, new Question({
                    id,
                    text: action.text,
                    answers: action.answers
                }));

            case QuestionActionTypes.SELECT_ANSWER:
                return state.update(("id-"+(action.questionID+1)),
                question => question.set('response', action.answerIndex));

            default:
                return state;
        }
    }
}

export default new QuestionStore();
