'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app-container';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

import QuestionActions from './data/actions/question-actions';

QuestionActions.createQuestion('yo whats this', ['this', 'or this']);
