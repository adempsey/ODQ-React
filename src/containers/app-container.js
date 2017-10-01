import React from 'react';
import AppView from '../views/app-view';
import { Container } from 'flux/utils';
import QuestionActions from '../data/actions/question-actions';
import QuestionStore from '../data/stores/question-store';
import QuestionDisplayStore from '../data/stores/question-display-store';

function getStores() {
    return [
        QuestionStore,
        QuestionDisplayStore
    ];
}

function getState() {
    return {
        questions: QuestionStore.getState(),
        questionDisplay: QuestionDisplayStore.getState(),

        onCreate: QuestionActions.createQuestion,
        onAdvance: QuestionActions.advanceQuestion,
        onPrevious: QuestionActions.previousQuestion
    };
}

export default Container.createFunctional(AppView, getStores, getState);
