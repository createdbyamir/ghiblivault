import { useState, useEffect } from 'react';
import PeopleCard from './PeopleCard';

function PeopleList({ limit }) {
  const url = "https://ghibliapi.vercel.app/people";
  const [people, setPeople] = useState([]);
  const [visibleCount, setVisibleCount] = useState(limit);

  useEffect(() => {
    async function getPerson() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Response status: ${res.status}`);
        }
        const result = await res.json();
        setPeople(result);
      } catch (error) {
        console.error(error.message);
      }
    }
    getPerson();
  }, []);

    const totalCount = people.length;
    const showToggle = totalCount > limit;
    const visiblePeople = people.slice(0, visibleCount);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePeople.map(person => (
          <PeopleCard key={person.id} person={person} />
        ))}
      </div>

      {showToggle && (
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
      )}
    </>
  );
}

export default PeopleList;
