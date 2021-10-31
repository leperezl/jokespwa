import React from 'react'

import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import Nikaido from './nikaido'
import './styles/jokes.css';

export const HeroCard = (props) => {
    return (
        <div style= {{padding: '2rem'}}>
            <Card style={{ width: '15rem'}}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                    Description: {props.description}
                    </Card.Text>
                    <Card.Text>
                    Comics: {props.comicCount}
                    </Card.Text>
                    <Nikaido />
                </Card.Body>
            </Card>
        </div>
    )
}