import React from 'react'
import MD5 from "crypto-js/md5";
import { useEffect } from 'react';
import { useState } from 'react'
import { HeroCard } from './HeroCard';
import './styles/jokes.css';

const Marvel = () => {
    const apikey= "f3e1054e2cbb15e7a524c4310f30d676"
    const priv = "c7dda2179d764d65a0395ebc861cebd13ce7cd64"
    const linkBase = "http://gateway.marvel.com/v1/public/characters?"
    //let chain = date +"c7dda2179d764d65a0395ebc861cebd13ce7cd64"+"f3e1054e2cbb15e7a524c4310f30d676"
    //let hash = MD5(chain).toString()
    
    //req needs link + ts=x &apikey=y &hash=z
    const [date, setDate] =useState(Date.now().toString())
    const [heroes, setHeroes] = useState([])
    const [hash, setHash] =useState( MD5(date+priv+apikey).toString())
    const [apiLink, setLink] = useState(linkBase+"ts="+date+"&apikey="+apikey+"&hash="+hash)
 


    useEffect(() => {
        if(!navigator.onLine){
            if(localStorage.getItem("Heroes") === null) {
                setHeroes("Loading...")
            } else {
                setHeroes(JSON.parse(localStorage.getItem("Heroes")));
                console.log(JSON.parse(localStorage.getItem("Heroes")))
            }
        } else {
            fetch(apiLink).then( (res)=> res.json()).then( (apires) => {
                console.log(apires)
                console.log("=================================================")
                console.log(apires.data)
                //for fun add a link to each heroes comic collection
    
                const allHeroes = apires?.data?.results?.map((e)=>{
                return {
                    key: e.id,
                    image: e.thumbnail.path+"/portrait_incredible.jpg",
                    name: e.name,
                    description: e.description,
                    comicCount: e.comics.available,
                }
                })
        
            setHeroes(allHeroes);
            setDate(Date.now().toString());
            setHash(MD5(date+priv+apikey).toString())
            setLink(linkBase+"ts="+date+"&apikey="+apikey+"&hash="+hash)
            localStorage.setItem("Heroes", JSON.stringify(allHeroes));
            })           
    
        }

    }, [])

    const  fetchInfo = async ()=>{
        fetch(apiLink).then( (res)=> res.json()).then( (apires) => {
            console.log(apires)
            console.log("=================================================")
            console.log(apires.data)
            //for fun add a link to each heroes comic collection

            const allHeroes = apires?.data?.results?.map((e)=>{
            return {
                key: e.id,
                image: e.thumbnail.path+"/portrait_incredible.jpg",
                name: e.name,
                description: e.description,
                comicCount: e.comics.available,
            }
            })
    
        setHeroes(allHeroes);
        setDate(Date.now().toString());
        setHash(MD5(date+priv+apikey).toString())
        setLink(linkBase+"ts="+date+"&apikey="+apikey+"&hash="+hash)
        console.log(allHeroes);
        console.log(apiLink)
        })
    }

    //console.log(chain);
    console.log(hash);
    return (
        <div className= "container">
        {heroes?.map( (char) => 
            (<HeroCard 
                key= {char.id}
                image={char.image}
                name={char.name}
                description={char.description}
                comicCount={char.comicCount}
            />))}
        </div>
        )
    
}

export default Marvel
