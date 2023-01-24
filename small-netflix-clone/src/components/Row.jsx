import React, { useEffect, useState } from 'react'
import './row.css'
import axios from '../axios'

const Row = ({title,fetchUrl,isLargeRow=false,  detail , setDetail, setId,setUrl}) => {
    const [movies,setMovies]=useState([])
    const base_url="https://image.tmdb.org/t/p/original/"
    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(fetchUrl)
            setMovies(
                request.data.results
            )
        }
        fetchdata()
    },[fetchUrl])
  return (
    <div className='row__bg'>
        <h2>{title}</h2>
        <div className="row__posters">
            { 
                movies.map(movie=>(
                    ((isLargeRow&&movie.poster_path) || (!isLargeRow&&movie.backdrop_path)) &&(
                    <div className='card' onClick={()=>{setDetail(true); setId(movie.id) ;setUrl(fetchUrl)}}>
                        <img className={`row__poster ${isLargeRow&&"row__posterlarge"}`}
                            key={movie.id}
                            src={`${base_url}${
                                isLargeRow
                                ?movie?.poster_path
                                :movie?.backdrop_path}`} 
                            alt={movie.name} />
                        <h3>{movie?.title || movie?.name ||movie?.original}</h3>
                    </div>)
                    ))
            }
        </div>
    </div>
  )
}
export default Row