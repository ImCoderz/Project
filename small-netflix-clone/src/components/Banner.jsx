import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../axios'
import requests from '../requests';
const Banner = () => {
    const [enable,setEnable]=useState(false);
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[Math.floor(Math.random()* request.data.results.length-1)]
            )
        }
        fetchData();
    },[])
    const truncate=(string,n)=>{
        return string?.length>n?string.substr(0,n-1)+'...':string
    }
    return (
        <header className='banner__bg' style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition: "center center"
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name ||movie?.original}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My list</button>
                </div>
                <h1 className='banner__description' onClick={()=>{setEnable(!enable)}}>
                    {!enable
                        ?truncate(movie?.overview,150)
                        :movie?.overview
                    }
                </h1>
            </div>
            <div className="banner__fade"/>
        </header>
    )
    }

    export default Banner