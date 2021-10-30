import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nikaido from './nikaido'
import './styles/jokes.css';


const Joke = () => {
    const jokeapi= "https://api.chucknorris.io/jokes/random";
    const [joke, setjoke] = useState('Funny Joke')
    const [updt, trigger] =useState(0)

   useEffect(()=>{
        getJoke();     
   }, [updt]);

    const getJoke = async ()=>{
        const data = await fetch(jokeapi);
        const datajson = await data.json();

        //const funny = { value: datajson.value }
        console.log(datajson.value)
        //setjoke(funny.value)
        setjoke(datajson.value)
        console.log(joke)
    }
    const handleClick = () => trigger(!updt)

    return (
        <div className="quoteContain">
            <Card className="quoteBox">
            <Card.Header>Joke</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    {joke}{' '}
                </p>
                <footer className="blockquote-footer">
                    Chuck Norri on <cite title="Source Title">Chuck Norris the movie</cite>
                </footer>
                </blockquote>
                <Button variant="secondary" className="funnyLogo" onClick={handleClick}>Update</Button>{' '}
                <Nikaido />
            </Card.Body>
            </Card>
            
        </div>
    )
}

export default Joke
