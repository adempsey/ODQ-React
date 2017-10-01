import React from 'react';

const AnswerView = (props) => {
    return (
        <button
            value={props.index}
            onClick={props.onSelect}>
            {props.text}
        </button>
    );
}

export default AnswerView;
