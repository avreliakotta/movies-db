
import css from "./movie-card.module.css";
import { Link } from "react-router-dom";
import {Movie} from "../../reducers/movies";

const MovieCard =({id,title,overview,popularity}:Movie)=>{
    return(
        <>
<Link to={`/movies/${id}`} className={css.movieLink}>{title}</Link>
                    <p className={css.text}>{overview}</p>
                    <p className={css.numberText}>{popularity}</p>
                    </>
    )
}
export default MovieCard;