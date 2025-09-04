import { Link } from "react-router-dom";

import { FaCalendarAlt } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
	const releaseYear = movie.release_date
		? new Date(movie.release_date).getFullYear()
		: "Ano desconhecido";

	return (
		<div className="movie-card">
			<img src={imageUrl + movie.poster_path} alt={movie.title} />
			<h2>{movie.title}</h2>
			<p>
				<FaCalendarAlt /> {releaseYear}
			</p>
			{showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
		</div>
	);
};

export default MovieCard;
