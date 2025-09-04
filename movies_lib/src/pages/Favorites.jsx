import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const Favorites = () => {
	const { favorites } = useContext(FavoritesContext);

	return (
		<div className="container">
			<h2 className="title">Meus Favoritos</h2>
			<div className="movies-container">
				{favorites.length === 0 && (
					<p>Nenhum filme adicionado aos favoritos.</p>
				)}
				{favorites.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	);
};

export default Favorites;
