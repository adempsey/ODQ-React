import Dispatcher from '../dispatcher';
import Immutable from 'immutable';
import Question from '../models/question-model';
import { ReduceStore } from 'flux/utils';

class QuestionStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            default:
                return state;
        }
    }
}

export default new QuestionStore();
