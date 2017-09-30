'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app-container';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

import QuestionActions from './data/actions/question-actions';

QuestionActions.createQuestion(
    "Pain Intensity",
    [
        "I have no pain at the moment",
    	"The pain is very mild at the moment",
    	"The pain is moderate at the moment",
    	"The pain is fairly severe at the moment",
    	"The pain is very severe at the moment",
        "The pain is the worst imaginable at the moment"
    ]
);

QuestionActions.createQuestion(
    "Personal Care (e.g., washing, dressing)",
    [
    	"I can look after myself normally without causing extra pain",
    	"I can look after myself normally but it causes extra pain",
    	"It is painful to look after myself and I am slow and careful",
    	"I need some help but can manage most of my personal care",
    	"I need help everyday in most aspects of self-care",
    	"I do not get dressed, wash with difficulty, and stay in bed"
    ]
);

QuestionActions.createQuestion(
    "Lifting",
    [
        "I can lift heavy weights without extra pain",
        "I can lift heavy weights but it gives me extra pain",
        "I can lift heavy weights if they are conveniently placed, e.g. on a table",
        "Pain prevents me lifting heavy weights but I can manage lighter weights if they are conveniently positioned",
        "I can only lift very light weights",
        "I cannot lift or carry anything"
    ]
);
