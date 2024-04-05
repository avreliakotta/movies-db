import css from "./movies.module.css";
import {Movie} from "../../reducers/movies";
import MovieCard from "../MovieCard/MovieCard";
import {connect} from "react-redux";
import {RootState} from "../../store";
interface MoviesProps{
    movies:Movie[]
}
const Movies=({movies} :MoviesProps)=>{
    return(
        <>
        <h1>Movies</h1>
        <ul className={css.moviesList}>
            {movies.map(movie=>(
                <li className={css.moviesItem} >
               <MovieCard  key={movie.id}id={movie.id} title={movie.title} overview={movie.overview} popularity={movie.popularity}/>     
                    
                </li>
            )
                
            )}
        </ul>
        </>
    )
}
const mapStateToProps= (state: RootState)=>({movies: state.movies.top});
const connector=connect(mapStateToProps);
export default connector(Movies) ;