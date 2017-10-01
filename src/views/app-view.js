import React from 'react';
import QuestionView from './question-view';
import Immutable from 'immutable';
import SummaryView from './summary-view';

const AppView = (props) => {

    const currentIndex = props.questionDisplay;
    const questionList = [...props.questions.values()].map(q => {return q});

    var currentQuestion = null;
    const createResponse = (event) => {
        props.onSelect(currentIndex, event.target.value);
    };
    if (questionList.length > 0 && currentIndex < questionList.length) {
        currentQuestion = <QuestionView
                            question={questionList[currentIndex]}
                            onSelect={createResponse}
                          /> ;
    }

    return (
        <div>
            <h1>heyyy</h1>
            <button onClick={props.onPrevious}>Back</button>
            <button
                onClick={props.onAdvance}
                disabled={questionList[currentIndex] != null && questionList[currentIndex].response == -1}>
                Next
            </button>
            {currentQuestion}
        </div>
    );
};

export default AppView;
