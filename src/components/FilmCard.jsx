import FilmList from "./FilmList";

function FilmCard({ film }) {
  return (
    <div className="p-4 border rounded mb-4 w-6/12">
      <img src={film.movie_banner} className="w-full"></img>
      <h2 className="text-xl font-bold">{film.title}</h2>
      <p>{film.release_date}</p>
      <p>{film.director}</p>
    </div>
  );
}
export default FilmCard;
