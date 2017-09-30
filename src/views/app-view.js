import React from 'react';
import AnswerView from './answer-view';

const AppView = (props) => {
    return (
        <div>
            <h1>heyyy</h1>
            <ul>
                {
                    [...props.questions.values()].map(question => (
                        <li key={'q-'+question.id}>{question.text}
                            <ol>
                                {
                                    [...question.answers].map((answer, index) => (
                                        <li key={'q-'+question.id+'-ans-'+index}>
                                            <AnswerView
                                                index={index}
                                                text={answer}
                                            />
                                        </li>
                                    ))
                                }
                            </ol>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default AppView;
