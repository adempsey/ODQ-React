import React from 'react';

const AppView = (props) => {
    return (
        <div>
            <h1>heyyy</h1>
            <ul>
                {
                    [...props.questions.values()].map(question => (
                        <li key={question.index}>{question.text}
                            <ol>
                                {[...question.answers].map((answer, index) => (
                                    <li key={index}>{answer}</li>
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
