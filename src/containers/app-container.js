import React from 'react';
import AppView from '../views/app-view';
import { Container } from 'flux/utils';
import QuestionActions from '../data/actions/question-actions';
import QuestionStore from '../data/stores/question-store';

function getStores() {
    return [
        QuestionStore
    ];
}

function getState() {
    return {
        questions: QuestionStore.getState(),

        onCreate: QuestionActions.createQuestion
    };
}

export default Container.createFunctional(AppView, getStores, getState);
