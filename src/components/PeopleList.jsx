import { useState, useEffect } from 'react';
import PeopleCard from './PeopleCard';

function PeopleList ({ limit }) {
    const url = "https://ghibliapi.vercel.app/people";
    const [people, setPeople] = useState( [] )

    useEffect(() => {
        async function getPerson() {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`Response status: $(res.status)`);
                }
                const result = await res.json();
                setPeople(result);
            }   catch (error) {
                    console.error(error.message)
                }
        } // Async closing bracket
        getPerson();
    }, []); // useEffect closing bracket
    const limitedPeople = people.slice(0, limit);
    return(
            <>
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">People</h2>
                    <a
                        href="#"
                        className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                        The characters behind the magic →
                    </a>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {limitedPeople.map(person =>
                    <PeopleCard key={person.id} person={person}/>)}
                </div>
            </>

    )
}

export default PeopleList