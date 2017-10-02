import React from 'react';
import { Table, Grid, Row, Col, PageHeader } from 'react-bootstrap';

const SummaryView = (props) => {
    return (
        <Grid>
            <Row>
                <Col md={12}>
                    <PageHeader>Summary</PageHeader>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Table striped bordered hover>
                        <tbody>
                            {
                                props.questions.map((question, index) => (
                                <tr key = {'summary-q-'+index}>
                                    <th>{question.text}</th>
                                    <th>{question.answers[question.response]}</th>
                                </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Grid>
    );
};

export default SummaryView;
