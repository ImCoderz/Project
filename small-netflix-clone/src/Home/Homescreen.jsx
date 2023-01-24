import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Row from '../components/Row'
import requests from '../requests'
import './homescreen.css'
import { useState } from 'react'
const Homescreen = ({detail ,setDetail ,setId,setUrl}) => {
  return (
    <div className='homescreen__bg'>
        <Navbar/>
        <Banner/>
          <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals}  isLargeRow  detail={detail} setDetail={setDetail} setId={setId} setUrl={setUrl}/>
          <Row title='Trending Now' fetchUrl={requests.fetchTrending} detail={detail} setDetail={setDetail} setId={setId} setUrl={setUrl}/>
          <Row title='Top Rated' fetchUrl={requests.fetchTopRated} detail={detail} setDetail={setDetail} setId={setId} setUrl={setUrl}/>
          <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} detail={detail} setDetail={setDetail} setId={setId} setUrl={setUrl}/>
          <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} detail={detail} setDetail={setDetail} setId={setId} setUrl={setUrl}/>
          <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} detail={detail} setDetail={setDetail} setId={setId} setUrl={setUrl}/>
          <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} detail={detail} setDetail={setDetail} setId={setId} setUrl={setUrl}/>
          <Row title='Documentaires' fetchUrl={requests.fetchDocumentaries} detail={detail} setDetail={setDetail} setId={setId} setUrl={setUrl}/>
    </div>
  )
}

export default Homescreen