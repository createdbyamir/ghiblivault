import { Link } from "react-router-dom";


function FilmCard({ film }) {
  return (
    <Link to={`/films/${film.id}`}>
      <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
        <img
          src={film.movie_banner}
          alt={`${film.title} banner`}
          className="w-full h-48 object-cover"
          width="200"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{film.title}</h2>
          <p className="text-sm text-gray-500">Released: {film.release_date}</p>
          <p className="text-sm text-gray-600">Director: {film.director}</p>
        </div>
      </div>
    </Link>
  );
}

export default FilmCard;
