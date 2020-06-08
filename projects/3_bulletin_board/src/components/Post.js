import React from 'react'
import { Card, Button } from 'react-bootstrap';

import './Post.css'

const Post = (props) => {
    return (
        <Card className='Post'>
            <Card.Body>
                <h2 className='mb-3'>📌</h2>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button variant='primary' href={props.link} target='_blank'>Link</Button>
            </Card.Body>
        </Card>
    )
}

Post.defaultProps = {
    title: 'Example',
    text: 'text',
    link: '#test'
}

export default Post
