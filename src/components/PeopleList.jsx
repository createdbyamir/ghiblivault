import { useState, useEffect } from 'react';
import PeopleCard from './PeopleCard';

function PeopleList () {
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
    return(
            <div>
                {people.map(person =>
                <PeopleCard key={people.id} person={person}/>)}
            </div>
    )
}

export default PeopleList