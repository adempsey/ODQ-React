import React from 'react';
import { Pager } from 'react-bootstrap';

const NavPanelView = (props) => {
    const shouldEnableNext = (props.questionList[props.currentIndex] != null &&
                              props.questionList[props.currentIndex].response == -1);

    return (
        <Pager>
            <Pager.Item
                className="navigation-button"
                onClick={props.onPrevious}
                disabled={props.currentIndex < 1}>
                Back
            </Pager.Item>
            <Pager.Item
                className="navigation-button"
                onClick={props.onAdvance}
                disabled={shouldEnableNext}>
                Next
            </Pager.Item>
        </Pager>
    )
};

export default NavPanelView;
