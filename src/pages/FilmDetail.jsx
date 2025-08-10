import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FilmDetail() {
    const { id } = useParams();
    const url = `https://ghibliapi.vercel.app/films/${id}`;
    const [film, setFilm] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() =>{
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
        getFilm()
    }, [url]);

        if (loading) {
        return <p className="text-center">Loading...</p>;
        }

        if (!film) {
        return <p className="text-center">Film not found</p>;
        }

        return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <img
            src={film.movie_banner}
            alt={`${film.title} banner`}
            className="w-full h-48 object-cover"
            width="200"
            />
            <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{film.title}</h2>
            <p className="text-sm text-gray-500">Released: {film.release_date}</p>
            <p className="text-sm text-gray-600">Director: {film.director}</p>
            </div>
        </div>
        );
    }

export default FilmDetail