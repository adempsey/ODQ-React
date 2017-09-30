import React from 'react';
import AnswerSectionView from './answer-section-view';

const AppView = (props) => {
    return (
        <div>
            <h1>heyyy</h1>
            <ul>
                {
                    [...props.questions.values()].map(question => (
                        <li key={'q-'+question.id}>
                            {question.text}
                            <AnswerSectionView
                                questionIndex={question.id}
                                answers={question.answers}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default AppView;
