import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";

function FilmList({ limit }) {
  const [film, setFilm] = useState([]);
  const [visibleCount, setVisibleCount] = useState(limit);
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
    const totalCount = film.length;
    const showToggle = totalCount > limit;
    const visibleFilms = film.slice(0, visibleCount);

    return (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleFilms.map(film => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>

        {showToggle &&
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                if (visibleCount >= totalCount) {
                  setVisibleCount(limit);
                } else {
                  setVisibleCount(visibleCount + limit);
                }
              }}
              className="text-blue-600 hover:text-blue-800 font-medium mt-10 mb-20"
            >
              {visibleCount >= totalCount ? 'Show less' : `Show more`}
            </button>
          </div>
        }
      </>

    );

}


export default FilmList