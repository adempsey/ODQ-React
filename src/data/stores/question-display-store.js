import Dispatcher from '../dispatcher';
import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import QuestionActionTypes from '../actions/question-action-types';

class QuestionDisplayStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return Immutable.Record({counter: 0});
    }

    reduce(state, action) {
        switch (action.type) {
            case QuestionActionTypes.ADVANCE_QUESTION:
                return state.set(counter, counter + 1)

            default:
                return state;
        }
    }
}

export default new QuestionDisplayStore;
