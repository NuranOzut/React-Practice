import React, { useEffect, useState } from 'react'
import axios from "axios"
import MovieCards from './MovieCards';
import "./movie.css"

let API_KEY="&api_key=f98c87a47c745ba4ef7443f0507475e4"
let BASE_URL="https://api.themoviedb.org/3";
let url=BASE_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY
let filmCategories=["Popular","Theatre","Kids","Drama","Comedie"]





const MainMovie = () => {
    const [movieData, setMovieData] = useState([]);
    const [search, setSearch] = useState("");
    const [url_set, setUrl] = useState(url)

    useEffect(() => {
        const getMovieData =async () => { 
            try {

                const resp=await axios.get(url_set)
                const data=resp.data.results
                setMovieData(data)
             console.log(data) 
                
            } catch (error) {
                console.log(error)
                
            }

         }

   getMovieData()
    
    
    }, [url_set])


    const getData = (movieType) => { 

        if(movieType==="Popular"){
           url= BASE_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY


        }
        if(movieType==="Theatre"){
            url=BASE_URL+"/discover/movie?primary_release_date.gte=2023-09-15&primary_release_date.lte=2023-10-22"+API_KEY;


        }
        if(movieType==="Kids"){
            url=BASE_URL+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_KEY;

        }
        if(movieType==="Drama"){
            
            url=BASE_URL+"/discover/movie?with_genres=18&primary_release_year=2023"+API_KEY;
        }
        if(movieType==="Comedie"){
            url=BASE_URL+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_KEY;
         
        }

        setUrl(url)
    

     }

   const filteredMovie=  !search ? movieData : movieData.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()))
  /*  console.log(filteredMovie) */


  return (
    <>  
    <div className='header'>
        <nav>
            <ul>
                {
                    filmCategories.map((item,index)=>{
                        return(
                            <li><a href="#" key={index} name={item} onClick={(e)=>{getData(e.target.name)}} >{item}</a> </li>
                        )

                    })
                }

            </ul>
        </nav>

        <form >
            <div className='search-btn'>
                <input type="text" placeholder='Enter Movie Name' className='inputText' value={search} onChange={(e)=>setSearch(e.target.value)} />
            </div>
        </form>
    </div>
    <div className='container'>
        {
            (filteredMovie.length===0) ? <p className='notfound'>NOT FOUND</p> :
            filteredMovie.map((movie,index)=>{
                return(
                    <MovieCards {...movie} key={index}  />
                )
            })
        }

    </div>

  
    </>


  )
}

export default MainMovie