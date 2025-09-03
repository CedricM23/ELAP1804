import React, { useEffect, useState } from 'react'
import PeopleService from '../Services/PeopleService'

function People() {
  const[people, setPeople] = useState([])

  useEffect(() => {
    setPeople(PeopleService.getPeople())
  }, [])

  return (
    <div className='App-header'>
      {people.map(
        (person) => (
          <>
          <div key={person.id}>{person.name} - {person.bookTitle}</div>
          </>
        )
      )}
    </div>
  )
}

export default People
