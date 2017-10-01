import React from 'react';
import { Button } from 'react-bootstrap';

const AnswerView = (props) => {
    return (
        <Button
            className="answer-option"
            block
            bsSize="large"
            bsStyle={props.selected ? 'primary' : 'default'}
            value={props.index}
            onClick={props.onSelect}>
            {props.text}
        </Button>
    );
}

export default AnswerView;
