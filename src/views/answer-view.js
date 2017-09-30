import React from 'react';

const AnswerView = (props) => {
    return (
        <button value={props.index}>
            {props.text}
        </button>
    );
}

export default AnswerView;
