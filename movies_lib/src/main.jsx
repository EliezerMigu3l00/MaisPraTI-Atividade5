import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import Search from "./pages/Search.jsx";
import Favorites from "./pages/Favorites.jsx";
import { FavoritesProvider } from "./context/FavoritesContext";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<FavoritesProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<App />}>
						<Route path="/" element={<Home />} />
						<Route path="movie/:id" element={<Movie />} />
						<Route path="search" element={<Search />} />
						<Route path="favorites" element={<Favorites />} />{" "}
					</Route>
				</Routes>
			</BrowserRouter>
		</FavoritesProvider>
	</StrictMode>
);
