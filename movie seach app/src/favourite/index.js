import React from 'react';
import './index.css';
// import {useLocation} from "react-router";
function Favpage(props) {
    console.log('movies',props.movies)
    
    return (
        <div>
            <div className='fheader'><h3>Favoutite list</h3></div>
            <div className='favmovies'>
            {
                props.movies.map(movie=>{
                    return <div className='movie' key={movie.imdbID}>
                        <img src={movie.Poster} alt='poster' height='200' width='150' />
                        <p>{movie.Title}</p>4
                        <p> <span className='remove' id={movie.Title} onClick={(e)=>{props.removehandler(e)}}>remove</span></p>
                    </div>
                    })
            }
        </div>
        </div>
    );
}

export default Favpage;