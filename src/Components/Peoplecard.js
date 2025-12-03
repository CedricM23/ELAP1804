import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./People.css"
import { useEffect, useState } from "react"

export default function Peoplecard({ person }) {
    const [pickColor, setPickColor] = useState("#FEEAC9");

    useEffect(() => {
        if(person.occupation === "author"){
            setPickColor("#ABE7B2")
        } else if (person.Category === "Revolutionary"){
            setPickColor("#FF5555")
        } else if (person.Category === "Musicians"){
            setPickColor("#FFCDC9")
        } else if (person.Category === "Sports"){
            setPickColor("#9CC6DB")
        }
    }, [person])

    return (
        <div className='person' style={{backgroundColor:pickColor}}>
            <div className="imagediv">
                <img src={person.personImage} className="image" alt="none"/>
            </div>
            <div className="persondesc">
                <p className="name">{person.name}</p>
                <p className="line">{person.occupation ? person.occupation : person.Category}</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faArrowRight} className="arrow" />
            </div>
        </div>
    )
}