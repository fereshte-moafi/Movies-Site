import React, { Component } from 'react';
import "../styles/styles.css";
import axios from "axios";



class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      Genres:[]
    };
  }

  componentDidMount() {
    axios
      .get("/json/movies.json")
      .then(
        (res) => {
          //console.log(res.data[0]);
          const movies = res.data;
          let Ge;
          movies.map(movie => (Ge+=movie.Genre));
          
          Ge=Ge.split(',');
          Ge=Ge.slice(1);

          let Genres = [...new Set(Ge)];

          // let Genres=res.data[0].Genre+res.data[1].Genre;
         // console.log(Genres);
          
          this.setState({ movies,Genres });
        }
      )
      .catch((err) => console.log(err));
  }

  changeHandler =(e)=>{
    let input=e.target.value.toLowerCase();
    if(input!==""){
      axios
      .get("/json/movies.json")
      .then(
        (res) => {
          let movies = res.data;
          for (let i = 0; i < movies.length; i++) {
            let gg=movies[i].Genre.toLowerCase();
            var Genere_include=gg.includes(input, 0);
            //console.log(Genere_include);
            if(Genere_include){
              //console.log(i+1);
              console.log(movies[i]);
              movies=movies[i];
            }
          }  
        }
      )
      .catch((err) => console.log(err));

    } 
  }


  render() {
    return (

      <div>    
        <div className='box4'>
            <div className='movie-genre-box'>
              <input id="searchbox" type='text' placeholder='search by movie title' className='input-movie'  onChange={evt => this.changeHandler(evt)}></input>
            
                {
                  this.state.Genres.map(Genres => (
                    <ul className='movie-genre-ul'>
                    <li key={Genres} className='movie-genre'>
                      <a href='movies' className='link'>{Genres}</a>
                    </li>
                    </ul>
                  ))
                }

            </div>

            <ul className='movies-box'>
            {
              this.state.movies.map(movie => (
                <li key={movie.Id} className='movie-box'>
                  <img className={'movie-img'} src={movie.Poster} alt={movie.Poster}></img>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Director}<span style={{marginLeft:"60px"}}>{movie.Year}</span></p>
                  <p>{movie.Genre}</p><br />
                </li>
              ))}
          </ul>

        </div>
      </div>
    );
  }
}
export default Movies;
