import PeopleService from "../Services/PeopleService";
import { useEffect, useState } from "react";
import "./People.css"
import Peoplecard from "./Peoplecard";

export default function People() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        setPeople(PeopleService.getPeople())
    }, [])

    return (
        <>
            <div>
                <form action="/search" method="get" className="search">
                    <input type="search" id="search-input" name="q" placeholder="Search..." />
                        <button type="submit">Search</button>
                </form>

                <div className='grid'>
                    {people.map(
                        (person, index) => (
                            <Peoplecard person={person} key={index}/>
                        )
                    )}
                </div>
            </div>
        </>
    )
}