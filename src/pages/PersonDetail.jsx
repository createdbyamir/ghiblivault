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
    return <p className="py-16 text-center text-gray-600">Loading…</p>;
  }

  if (!person) {
    return <p className="py-16 text-center text-gray-600">Person not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-gray-100 bg-white/90 backdrop-blur shadow-lg overflow-hidden">
        {firstFilmImage && (
          <div className="relative">
            <img
              src={firstFilmImage}
              alt={`${person.name} related film banner`}
              className="w-full h-56 sm:h-64 md:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
          </div>
        )}

        <div className="p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
            {person.name}
          </h1>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Gender</p>
              <p className="mt-1 text-gray-900">{person.gender || "Unknown"}</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Age</p>
              <p className="mt-1 text-gray-900">{person.age || "Unknown"}</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Eye Color</p>
              <p className="mt-1 text-gray-900">{person.eye_color || "Unknown"}</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Hair Color</p>
              <p className="mt-1 text-gray-900">{person.hair_color || "Unknown"}</p>
            </div>
          </div>

          <div className="mt-6 h-px bg-gray-100" />

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm text-gray-500">
              Appears in: {Array.isArray(person.films) ? person.films.length : 0} film
              {Array.isArray(person.films) && person.films.length !== 1 ? "s" : ""}
            </span>
            {/* Add a back link or CTA here later  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonDetail;
