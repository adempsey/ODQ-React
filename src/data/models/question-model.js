import { Record } from 'immutable';

const Question = Record({
    id: 0,
    response: -1,
    text: '',
    answers: []
});

export default Question;
