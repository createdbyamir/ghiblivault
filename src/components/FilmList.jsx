import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";

function FilmList({ limit }) {
  const [film, setFilm] = useState([]);
  const url = "https://ghibliapi.vercel.app/films";

  useEffect(() => {
    async function getFilms() {
      try {
        const filmData = await fetch(url);
        if (!filmData.ok) throw new Error(`Response status: ${filmData.status}`);
        const result = await filmData.json();
        setFilm(result);
      } catch (error) {
        console.log(error.message);
      }
    }
    getFilms()
  }, []);
    const visibleFilms = film.slice(0, limit);
    return (
      <>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Films</h2>
        <a
          href="#"
          className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          The stories that shaped generations →
        </a>
      </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {visibleFilms.map(film => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </>

    );

}


export default FilmList