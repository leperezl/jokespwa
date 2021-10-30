import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nikaido from './nikaido'

const Joke = () => {
    const jokeapi= "https://api.chucknorris.io/jokes/random";
    const [joke, setjoke] = useState('Funny Joke')
/*
    useEffect =(() =>{
        getJoke();
    }, [joke])

    const getJoke = async ()=>{
        const data = await fetch(jokeapi);
        const datajson = await data.json();

        //const funny = { value: datajson.value }
        console.log(datajson.value)
        //setjoke(funny.value)
        setjoke(datajson.value)
        console.log(joke)
    }
    */
    return (
        <div className="quoteContain">
            <Card className="quoteBox">
            <Card.Header>Joke</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    {'joke'}{' '}
                </p>
                <footer className="blockquote-footer">
                    Chuck Norri on <cite title="Source Title">Chuck Norris the movie</cite>
                </footer>
                </blockquote>
                <Nikaido />
            </Card.Body>
            </Card>
            
        </div>
    )
}

export default Joke
