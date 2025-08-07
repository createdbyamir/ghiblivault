import { useState, useEffect } from "react";

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
            return result.title;
          } catch (error) {
            console.error(error.message);
            return "Unknown Title";
          }
        })
      );

      setFilmTitles(titles);
    }

    getFilmTitles();
  }, [person.films]);

  return (
    <div className="card">
      <h2>{person.name}</h2>
      <p>{person.gender}</p>
      <ul>
        {filmTitles.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleCard;
