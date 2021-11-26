import React, { useEffect, useState } from 'react';
import './index.css';
import Movie from '../viewmovie';
import { useNavigate } from "react-router-dom";
import Favpage from '../favourite';
import micon from '../assets/micon.png'



function Homepage() {
    const [details,setDetails]=useState({});
    const [favs,setFavs]=useState([]);
    const [icon,setIcon]=useState(false);
    // let history=useNavigate();

    async function getDetails(e){
        e.preventDefault();
        let name=e.target.value;
        let newurl=`http://www.omdbapi.com/?t=${name}&apikey=bd8019ae`;
        try{
            const response= await fetch(newurl)
            const data=await response.json()
            console.log(data)
            setDetails(data)
            console.log(details)    
        }catch(e){
            console.log(e)
        }    
    }
    async function search(fn){
        setIcon(false)
        let timer;
        clearTimeout(timer)
        timer=setTimeout(fn
        ,2000)
    }
    useEffect(()=>search(),favs,details)

    var removeByAttr = function(arr, attr, value){
        var i = arr.length;
        while(i--){
           if( arr[i] 
               && arr[i].hasOwnProperty(attr) 
               && (arguments.length > 2 && arr[i][attr] === value ) ){ 
    
               arr.splice(i,1);
    
           }
        }
        return arr;
    }
    function containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }
    
        return false;
    }

    // function sendInfo(){
    //     history('/favpage', {state:favs})
    // }

    function addFav(movie){
        let newfavs
        if(containsObject(movie,favs)){
            setIcon(false)
            newfavs=removeByAttr(favs, 'Title', movie.Title);
        }
        else{
            newfavs=[...favs,movie]
            setIcon(true)
        }
        
        console.log(newfavs)
        setFavs(newfavs)
    }
    function remfav(e){
        const title=e.target.id
        let newfavs=removeByAttr(favs, 'Title', title);
        console.log(newfavs)
        setIcon(false)
        setFavs(newfavs)
    }


    return (
        <div className='container'>
            <div className='header'>
                <input className='srchbr' placeholder='  search here...' onChange={(e)=>search(getDetails(e))} ></input>
                <div className='fav'><span className='appname'>Moviepedia </span><span><img src={micon} alt='logo' height='40' width='40' /></span></div>
            </div>    
            <div className='body'>
                {
                    details.Title ?  <Movie key={details.imdbID} movie={details} handleFavouritesClick={addFav} icon={icon} /> : <h2>Search for a movie / webseries</h2>
                }
               
            </div>
            <Favpage movies={favs}  removehandler={remfav} /> 
        </div>
    );
}

export default Homepage;