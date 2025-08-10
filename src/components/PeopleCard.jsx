import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function PeopleCard({ person }) {
  const [filmTitles, setFilmTitles] = useState([]);

  useEffect(() => {
    async function getFilmTitles() {
      const titles = await Promise.all(
        person.films.map(async (filmUrl) => {
          try {
            const resfilm = await fetch(filmUrl);
            if (!resfilm.ok) {
              throw new Error(`Response status: ${resfilm.status}`);
            }
            const result = await resfilm.json();
            return result;
          } catch (error) {
            console.error(error.message);
            return "Unknown Title";
          }
        })
      );

      setFilmTitles(titles);
    }

    getFilmTitles();
  }, []);
  const firstFilmImage = filmTitles[0]?.movie_banner || filmTitles[0]?.image;
  return (
    <Link to={`/people/${person.id}`}>
      <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
        <img 
          src={firstFilmImage} 
          className="w-full h-48 object-cover" 
          width="200">
        </img>
        <div className="p-4" key={person.id}>
          <h2 className="text-lg font-bold mb-2">{person.name}</h2>
            {filmTitles.map((film) => (
            <div>
              <p className="text-sm text-gray-500">{film.title}</p>
              <p className="text-sm text-gray-600">({film.release_date}) – {film.director}</p>
            </div>
            ))}
        </div>
      </div>
    </Link>
  );
}

export default PeopleCard;
