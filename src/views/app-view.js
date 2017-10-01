import React from 'react';
import QuestionView from './question-view';

const AppView = (props) => {

    const currentIndex = props.currentIndex;
    const questionList = [...props.questions.values()].map(q => {return q});
    var currentQuestion = null;
    if (questionList.length > 0) {
        currentQuestion = <QuestionView question={questionList[currentIndex]} /> ;
    }

    return (
        <div>
            <h1>heyyy</h1>
            {currentQuestion}
        </div>
    );
};

export default AppView;
