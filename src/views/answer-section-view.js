import React from 'react';
import AnswerView from './answer-view';
import { ButtonToolbar } from 'react-bootstrap';

const AnswerSectionView = (props) => {

    return (
        <div className="well">
            {
                props.answers.map((answer, index) => (
                    <AnswerView
                        key = {'q-'+props.questionIndex+'a-'+index}
                        index={index}
                        text={answer}
                        selected={index == props.response}
                        onSelect={props.onSelect}
                    />
                ))
            }
        </div>
    );
}

export default AnswerSectionView;
