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
    const [joke, setJoke] = useState('Funny Joke')
    const [updt, trigger] =useState(0)

   useEffect(()=>{
    if(!navigator.onLine){
        if(localStorage.getItem("joke") === null) {
            setJoke("Loading...")
        } else {
            setJoke(localStorage.getItem("joke"));
    }
    } else {
        fetch(jokeapi).then((res) => res.json()).then(res=>{
            setJoke(res.value);
            localStorage.setItem("joke", res.value);
        }) 
    }      
   }, [updt]);

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
                <div className="btnBox">
                    <Button variant="secondary" className="funnyLogo" onClick={handleClick}>Update</Button>{' '}
                </div>
                <Nikaido />
            </Card.Body>
            </Card>
            
        </div>
    )
}

export default Joke
