import PeopleService from "../Services/PeopleService";
import { useEffect, useState } from "react";
import "./People.css"
import arrow from "../Images/arrow.svg"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                        (person) => (
                            <div className='person'>
                                <div className="imagediv">
                                    <img src={person.personImage} className="image" />
                                </div>
                                <div className="persondesc">
                                    <p className="name">{person.name}</p>
                                    <p className="line">{person.occupation ? person.occupation : person.Category}</p>
                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}