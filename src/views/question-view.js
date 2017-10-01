import React from 'react';
import AnswerSectionView from './answer-section-view';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

const QuestionView = (props) => {
    return (
        <Grid>
            <Row>
                <Col xs={12} md={4}>
                    <PageHeader>{props.question.text}</PageHeader>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <AnswerSectionView
                        questionIndex={props.question.id}
                        answers={props.question.answers}
                        onSelect={props.onSelect}
                        response={props.question.response}
                    />
                </Col>
            </Row>
        </Grid>
    );
};

export default QuestionView;
