import React from 'react';
import AnswerView from './answer-view';
import { ButtonToolbar } from 'react-bootstrap';

const AnswerSectionView = (props) => {

    const wellStyles = {maxWidth: 800, margin: '0 auto 10px'};

    return (
        <div className="well" style={wellStyles}>
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
