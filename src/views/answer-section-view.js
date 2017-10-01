import React from 'react';
import AnswerView from './answer-view';

const AnswerSectionView = (props) => {
    return (
        <ul>
            {
                props.answers.map((answer, index) => (
                    <li
                        key = {'q-'+props.questionIndex+'a-'+index}
                    >
                        <AnswerView
                            index={index}
                            text={index == props.response ? "*"+answer : answer}
                            onSelect={props.onSelect}
                        />
                    </li>
                ))
            }
        </ul>
    );
}

export default AnswerSectionView;
