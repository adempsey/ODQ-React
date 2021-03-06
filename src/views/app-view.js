import React from 'react';
import QuestionView from './question-view';
import SummaryView from './summary-view';
import NavPanelView from './nav-panel-view';
import { Grid, Row, Col } from 'react-bootstrap';

const AppView = (props) => {

    const currentIndex = props.questionDisplay;
    const questionList = [...props.questions.values()].map(q => {return q});

    var displayView = null;
    const createResponse = (event) => {
        props.onSelect(currentIndex, event.target.value);
    };

    if (questionList.length > 0) {
        if (currentIndex < questionList.length) {
            displayView = <QuestionView
                                question={questionList[currentIndex]}
                                onSelect={createResponse}
                              /> ;

        } else if (currentIndex == questionList.length) {
            displayView = <SummaryView questions={questionList}/>

        } else {
            displayView = <h1>Thank you. Your responses have been recorded.</h1>
        }
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
                    <NavPanelView
                        onPrevious={props.onPrevious}
                        onAdvance={props.onAdvance}
                        onSubmit={props.onSubmit}
                        currentIndex={currentIndex}
                        questionList={questionList}/>
                </Col>
            </Row>
        </Grid>
    );
};

export default AppView;
