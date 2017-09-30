import { Record } from 'immutable';

const Question = Record({
    index: '',
    response: -1,
    text: '',
    answers: []
});

export default Question;
