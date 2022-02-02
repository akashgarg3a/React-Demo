import React, { useState, useEffect }  from "react";
import getSpeakers from "./api/Speakers";
import SpeakerList from "./SpeakerList";
function CoursesPage() {
    
    const [ speakers, setSpeakers] = useState([])
    
    useEffect( () => {
        setSpeakers(getSpeakers);
    }, [])

    return (
        <>
            <h2>Speakers</h2>
            <SpeakerList speakers={speakers} />
        </>
        
    )
    
}

export default CoursesPage;