import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

const SummaryView = (props) => {
    return (
        <Grid>
            <PageHeader>Summary</PageHeader>
                <ul>
                    {
                        props.questions.map((question, index) => (
                        <li key = {'summary-q-'+index}>
                            {question.text + ": " + question.answers[question.response]}
                        </li>
                        ))
                    }
                </ul>
        </Grid>
    );
};

export default SummaryView;
