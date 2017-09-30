import React from 'react';
import QuestionView from './question-view';

const AppView = (props) => {
    return (
        <div>
            <h1>heyyy</h1>
            <ul>
                {
                    [...props.questions.values()].map(question => (
                        <li key={'q-'+question.id}>
                            <QuestionView
                                question={question}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default AppView;
