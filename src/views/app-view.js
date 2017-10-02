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
                    <NavPanelView
                        onPrevious={props.onPrevious}
                        onAdvance={props.onAdvance}
                        currentIndex={currentIndex}
                        questionList={questionList}/>
                </Col>
            </Row>
        </Grid>
    );
};

export default AppView;
