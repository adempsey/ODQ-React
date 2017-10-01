import React from 'react';

const SummaryView = (props) => {
    return (
        <div>
            <h1>Summary</h1>
                <ul>
                    {
                        props.questions.map((question, index) => (
                        <li key = {'summary-q-'+index}>
                            {question.text + ": " + question.answers[question.response]}
                        </li>
                        ))
                    }
                </ul>
        </div>
    );
};

export default SummaryView;
