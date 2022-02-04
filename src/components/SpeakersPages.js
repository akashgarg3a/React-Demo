import React, { useState, useEffect }  from "react";
import { getSpeakers } from "./api/Speakers";
import SpeakerList from "./SpeakerList";
import {Link} from "react-router-dom";

function CoursesPage() {
    
    const [ speakers, setSpeakers] = useState([]);
    
    useEffect( () => {
        setSpeakers(getSpeakers);
    }, [])

    return (
        <>
            <h2>Speakers</h2>
            <Link className="btn btn-primary" to="/Speaker">Add Speaker</Link>
            <SpeakerList speakers={speakers} />
        </>
        
    )
    
}

export default CoursesPage;