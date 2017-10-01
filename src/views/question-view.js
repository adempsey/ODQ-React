import React from 'react';
import AnswerSectionView from './answer-section-view';

const QuestionView = (props) => {
    return (
        <div>
            <h1>{props.question.text}</h1>
            <AnswerSectionView
                questionIndex={props.question.id}
                answers={props.question.answers}
                onSelect={props.onSelect}
                response={props.question.response}
            />
        </div>
    );
};

export default QuestionView;
