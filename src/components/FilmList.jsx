import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";

function FilmList() {
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

    return (
    <div className="flex flex-wrap">
        {film.map(film => (
        <FilmCard key={film.id} film={film} />
        ))}
    </div>
    );

}


export default FilmList