import React, { useState, useEffect }  from "react";
import { getSpeakerById }  from "./api/Speakers";
const ManageSpeakerPage = props => {

    const [speaker, setSpeaker] = useState({
        speaker_id: null,
        first_name: "",
        last_name: "",
        title: "",
        company: "",
        speaker_bio: "",
        speaker_photo: "",
    });

    const speaker_id = props.match.params.id;
    useEffect( () => {
        setSpeaker(getSpeakerById(speaker_id));
    }, [speaker_id])
    return (
        <>
            <h2>Speaker Data</h2>
            {speaker.speaker_id}
        </>
    );
}

export default ManageSpeakerPage;