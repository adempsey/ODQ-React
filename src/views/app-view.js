import React from 'react';
import QuestionView from './question-view';
import Immutable from 'immutable';
import SummaryView from './summary-view';
import { Grid, Row, Col, ButtonToolbar, Button, Pager } from 'react-bootstrap';

const AppView = (props) => {

    const currentIndex = props.questionDisplay;
    const questionList = [...props.questions.values()].map(q => {return q});

    var displayView = null;
    const createResponse = (event) => {
        props.onSelect(currentIndex, event.target.value);
    };

    if (questionList.length > 0 && currentIndex < questionList.length) {
        displayView = <QuestionView
                            question={questionList[currentIndex]}
                            onSelect={createResponse}
                          /> ;
    } else if (questionList.length > 0 && currentIndex >= questionList.length) {
        displayView = <SummaryView questions={questionList}/>
    }

    return (
        <Grid>
            <Row>
                <Col md={12}>
                    {displayView}
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Pager>
                        <Pager.Item
                            className="navigation-button"
                            onClick={props.onPrevious}
                            disabled={currentIndex < 1}>
                            Back
                        </Pager.Item>
                        <Pager.Item
                            className="navigation-button"
                            onClick={props.onAdvance}
                            disabled={questionList[currentIndex] != null && questionList[currentIndex].response == -1}>
                            Next
                        </Pager.Item>
                    </Pager>
                </Col>
            </Row>
        </Grid>
    );
};

export default AppView;
