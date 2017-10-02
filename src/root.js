'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app-container';
import QuestionData from '../static/questions.json';
import QuestionActions from './data/actions/question-actions';

for (const q in QuestionData["data"]) {
    const question = QuestionData["data"][q];
    QuestionActions.createQuestion(question.title, question.answer);
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));
