import { Record } from 'immutable';

const Question = Record({
    index: 0,
    response: -1,
    text: '',
    answers: []
});

export default Question;
