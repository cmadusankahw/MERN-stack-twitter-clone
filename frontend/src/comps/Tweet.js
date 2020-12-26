import React from 'react';
import {Card} from 'react-bootstrap';

const Tweet = (props) => {

    const text = props.text;
    const author = props.author;
    const date = props.date;

    return (
        <>
        <Card style={{margin: '2%'}}>
        <Card.Body>
            <Card.Title>{author}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
            <Card.Text>
            {text}
            </Card.Text>
        </Card.Body>
        </Card>
        </>     
    )
}

export default Tweet;