import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FilmDetail() {
  const { id } = useParams();
  const url = `https://ghibliapi.vercel.app/films/${id}`;
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFilm() {
      try {
        const filmData = await fetch(url);
        if (!filmData.ok) throw new Error(`Response status: ${filmData.status}`);
        const result = await filmData.json();
        setFilm(result);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getFilm();
  }, [url]);

  if (loading) {
    return <p className="py-16 text-center text-gray-600">Loading…</p>;
  }

  if (!film) {
    return <p className="py-16 text-center text-gray-600">Film not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-gray-100 bg-white/90 backdrop-blur shadow-lg overflow-hidden">

        {film.movie_banner && (
          <div className="relative">
            <img
              src={film.movie_banner}
              alt={`${film.title} banner`}
              className="w-full h-56 sm:h-64 md:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
          </div>
        )}


        <div className="p-6 sm:p-8">

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
            {film.title}
          </h1>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Release Date</p>
              <p className="mt-1 text-gray-900">{film.release_date || "Unknown"}</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Director</p>
              <p className="mt-1 text-gray-900">{film.director || "Unknown"}</p>
            </div>
          </div>


          <div className="mt-6 h-px bg-gray-100" />

          {film.description && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Synopsis</h2>
              <p className="text-gray-700 leading-relaxed">{film.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;
