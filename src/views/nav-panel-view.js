import React from 'react';
import { Pager } from 'react-bootstrap';

const NavPanelView = (props) => {
    const shouldEnableNext = (props.questionList[props.currentIndex] != null &&
                              props.questionList[props.currentIndex].response == -1);


    const onSubmit = () => {
        const responses = props.questionList.map(q => {return q.response});
        props.onSubmit(responses);
    }

    var previousButton = (
        <Pager.Item
            className="navigation-button"
            onClick={props.onPrevious}
            disabled={props.currentIndex < 1}>
            Back
        </Pager.Item>
    );

    var nextButton = null;
    if (props.currentIndex < props.questionList.length) {
        nextButton = (
            <Pager.Item
                className="navigation-button"
                onClick={props.onAdvance}
                disabled={shouldEnableNext}>
                Next
            </Pager.Item>
        );
    } else if (props.currentIndex == props.questionList.length) {
        nextButton = (
            <Pager.Item
                className="navigation-button"
                onClick={onSubmit}>
                Submit
            </Pager.Item>
        );
    } else {
        previousButton = null;
    }

    return (
        <Pager>
            {previousButton}
            {nextButton}
        </Pager>
    )
};

export default NavPanelView;
