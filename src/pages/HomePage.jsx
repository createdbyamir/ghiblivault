import FilmList from '../components/FilmList';
import PeopleList from '../components/PeopleList';
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div>
            <section id="films">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Films</h2>
                    <Link to="/films"
                    className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                    The stories that shaped generations →
                    </Link>
                </div>
                <FilmList limit={6} />
            </section>

            <section id="people">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">People</h2>
                    <Link to="/people"
                    className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                    The characters behind the magic →
                    </Link>
                </div>
                <PeopleList limit={6} />
            </section>
        </div>
    )
}

export default HomePage