import React from 'react';
import QuestionView from './question-view';
import Immutable from 'immutable';
import SummaryView from './summary-view';
import { ButtonToolbar, Button } from 'react-bootstrap';

const AppView = (props) => {

    const currentIndex = props.questionDisplay;
    const questionList = [...props.questions.values()].map(q => {return q});

    var displayView = null;
    const createResponse = (event) => {
        props.onSelect(currentIndex, event.target.value);
    };

    if (questionList.length > 0 && currentIndex < questionList.length) {
        displayView = <QuestionView
                            question={questionList[currentIndex]}
                            onSelect={createResponse}
                          /> ;
    } else if (questionList.length > 0 && currentIndex >= questionList.length) {
        displayView = <SummaryView questions={questionList}/>
    }

    return (
        <div>
            <h1>heyyy</h1>
            {displayView}
            <ButtonToolbar>
                <Button
                    className="navigation-button"
                    bsSize="large"
                    onClick={props.onPrevious}>
                    Back
                </Button>
                <Button
                    className="navigation-button"
                    bsStyle="success"
                    bsSize="large"
                    onClick={props.onAdvance}
                    disabled={questionList[currentIndex] != null && questionList[currentIndex].response == -1}>
                    Next
                </Button>
            </ButtonToolbar>
        </div>
    );
};

export default AppView;
