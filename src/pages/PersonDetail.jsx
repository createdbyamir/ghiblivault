import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PersonDetail() {
  const { id } = useParams();
  const url = `https://ghibliapi.vercel.app/people/${id}`;
  const [person, setPerson] = useState(null);
  const [firstFilmImage, setFirstFilmImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPerson() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Response status: ${res.status}`);
        const result = await res.json();
        setPerson(result);

        if (result.films?.length > 0) {
          const firstFilmUrl = result.films[0];
          const filmRes = await fetch(firstFilmUrl);
          if (filmRes.ok) {
            const filmData = await filmRes.json();
            setFirstFilmImage(filmData.movie_banner || filmData.image);
          }
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getPerson();
  }, [url]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!person) {
    return <p className="text-center">Person not found</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      {firstFilmImage && (
        <img
          src={firstFilmImage}
          alt={`${person.name}'s film`}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{person.name}</h2>
        <p className="text-sm text-gray-600">Gender: {person.gender || "Unknown"}</p>
        <p className="text-sm text-gray-600">Age: {person.age || "Unknown"}</p>
        <p className="text-sm text-gray-600">Eye Color: {person.eye_color || "Unknown"}</p>
        <p className="text-sm text-gray-600">Hair Color: {person.hair_color || "Unknown"}</p>
      </div>
    </div>
  );
}

export default PersonDetail;
