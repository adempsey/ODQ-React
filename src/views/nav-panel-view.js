import React from 'react';
import { Pager } from 'react-bootstrap';

const NavPanelView = (props) => {
    const shouldEnableNext = (props.questionList[props.currentIndex] != null &&
                              props.questionList[props.currentIndex].response == -1);

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
    } else {
        nextButton = (
            <Pager.Item
                className="navigation-button">
                Submit
            </Pager.Item>
        );
    }

    return (
        <Pager>
            <Pager.Item
                className="navigation-button"
                onClick={props.onPrevious}
                disabled={props.currentIndex < 1}>
                Back
            </Pager.Item>
            {nextButton}
        </Pager>
    )
};

export default NavPanelView;
