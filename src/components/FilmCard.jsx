function FilmCard({ film }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={film.movie_banner}
        alt={`${film.title} banner`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{film.title}</h2>
        <p className="text-sm text-gray-500">Released: {film.release_date}</p>
        <p className="text-sm text-gray-600">Director: {film.director}</p>
      </div>
    </div>
  );
}

export default FilmCard;
