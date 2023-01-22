import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


function Recipe({ title, image, id }) {
    const history = useHistory();


    const gotoDetail = (recipeID) => {
        history.push(`/recipe/${recipeID}`);
    }
    return (
        <Card style={{ width: '15rem', margin: 10 }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Button variant="primary" onClick={() => gotoDetail(id)}>Detail</Button>
            </Card.Body>
        </Card>
    )
}

export default Recipe