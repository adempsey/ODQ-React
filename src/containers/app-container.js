import React from 'react';
import { Container } from 'flux/utils';
import AppView from '../views/app-view';

function getStores() {
    return [];
}

function getState() {
    return {};
}

export default Container.createFunctional(<AppView />, getStores, getState);
