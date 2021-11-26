import React from 'react';
import gold from '../assets/gold.png';
import white from '../assets/white.png';
import './index.css';
function Movie(props) {
    return (
        <div className='details'>
        <img src={props.movie.Poster} alt='poster' width='300' height='400'/>
        <p className='moviename'>{props.movie.Title} <span className='icon'><img className='star' src={props.icon ? gold : white} alt='icon' height='30' width='30' onClick={()=>{props.handleFavouritesClick(props.movie)}} /></span></p>
        <p className='moviedet'>{props.movie.Plot}</p>
        <p className='moviedet'>Actors : {props.movie.Actors}</p>
        <p className='moviedet'>Director : {props.movie.Director}</p>
        <p className='moviedet'>Released on : {props.movie.Released}</p>
        </div>
    );
}

export default Movie;