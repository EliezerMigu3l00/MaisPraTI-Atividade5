import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
	BsPersonWorkspace,
	BsPeopleFill,
	BsHourglassSplit,
	BsFillFileEarmarkTextFill,
	BsStarFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";
import { FavoritesContext } from "../context/FavoritesContext";

import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	const [director, setDirector] = useState("");
	const [cast, setCast] = useState([]);
	const [popupMessage, setPopupMessage] = useState("");
	const { favorites, addFavorite, removeFavorite } =
		useContext(FavoritesContext);

	const isFavorite = favorites.some((fav) => fav.id === parseInt(id));

	const getMovie = async (url) => {
		const res = await fetch(url);
		const data = await res.json();

		setMovie(data);
	};

	const getCredits = async (url) => {
		const res = await fetch(url);
		const data = await res.json();

		const directorInfo = data.crew.find(
			(person) => person.job === "Director"
		);
		setDirector(directorInfo ? directorInfo.name : "Desconhecido");

		const topCast = data.cast.slice(0, 5).map((actor) => actor.name);
		setCast(topCast);
	};

	useEffect(() => {
		const movieURL = `${moviesURL}${id}?api_key=${apiKey}`;
		const creditsURL = `${moviesURL}${id}/credits?api_key=${apiKey}`;

		getMovie(movieURL);
		getCredits(creditsURL);
	}, []);

	const handleFavorite = () => {
		if (isFavorite) {
			removeFavorite(movie.id);
			setPopupMessage("Filme removido dos favoritos!");
		} else {
			addFavorite({
				id: movie.id,
				title: movie.title,
				poster_path: movie.poster_path,
				release_date: movie.release_date,
			});
			setPopupMessage("Filme adicionado aos favoritos!");
		}

		setTimeout(() => setPopupMessage(""), 3000);
	};

	return (
		<div className="movie-page">
			{movie && (
				<>
					<MovieCard movie={movie} showLink={false} />
					<p className="tagline">{movie.tagline}</p>
					<div className="info">
						<h3>
							<BsPersonWorkspace /> Diretor:
						</h3>
						<p>{director}</p>
					</div>
					<div className="info">
						<h3>
							<BsPeopleFill /> Elenco:
						</h3>
						<p>{cast.join(", ")}</p>
					</div>
					<div className="info">
						<h3>
							<BsStarFill /> Avaliação:
						</h3>
						<p>{movie.vote_average.toFixed(1)} / 10</p>
					</div>
					<div className="info">
						<h3>
							<BsHourglassSplit /> Duração:
						</h3>
						<p>{movie.runtime} minutos</p>
					</div>
					<div className="info description">
						<h3>
							<BsFillFileEarmarkTextFill /> Descrição:
						</h3>
						<p>{movie.overview}</p>
					</div>
					<button onClick={handleFavorite} className="favorite-btn">
						{isFavorite
							? "Remover dos Favoritos"
							: "Adicionar aos Favoritos"}
					</button>
					{popupMessage && (
						<div className="popup">{popupMessage}</div>
					)}
				</>
			)}
		</div>
	);
};

export default Movie;
