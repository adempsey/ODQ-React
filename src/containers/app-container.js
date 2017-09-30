import React from 'react';
import AppView from '../views/app-view';
import { Container } from 'flux/utils';
import QuestionStore from '../data/stores/question-store';

function getStores() {
    return [
        QuestionStore
    ];
}

function getState() {
    return {
        questions: QuestionStore.getState()
    };
}

export default Container.createFunctional(AppView, getStores, getState);
