import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './homedetail.css'
import axios from '../axios'
const Homedetail = ({id,fetchUrl}) => {
    const [movies,setMovies]=useState([])
    const base_url="https://image.tmdb.org/t/p/original/"
    console.log(id);
    console.log(fetchUrl);
    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(fetchUrl)
            setMovies(
                request.data.results
            )
            console.log(movies);
        }
        fetchdata()

    },[fetchUrl])
    console.log(movies);
  return (
    <div>
        <Navbar/>
        {movies.map(movie=>(
            (movie.id==id)&&( 
                    <div className='detail__image'>
                        <h1 className='h1 premier'>{movie?.title || movie?.name ||movie?.original}</h1>
                        <img
                            className="detail__poster"
                            key={movie.id}
                            src={`${base_url}${movie?.poster_path}`}/>
                        <div className="detail__text">
                            <h1 className='h1 deuxieme'>{movie?.title || movie?.name ||movie?.original}</h1>
                            <h3>{movie?.first_air_date}</h3>
                            <span>{movie?.vote_average}</span>
                            <p>{movie?.overview}</p>
                        </div>
                    </div>
            )
        )
        )
        }
    </div>
  )
}

export default Homedetail