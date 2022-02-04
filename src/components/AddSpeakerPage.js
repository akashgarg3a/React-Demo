import React, { useState } from "react";
import SpeakerForm from "./SpeakerForm";

const AddSpeakerPage = props => {
    const [speaker, setSpeaker] = useState({
        speaker_id: null,
        first_name: "",
        last_name: "",
        title: "",
        company: "",
        speaker_bio: "",
        speaker_photo: "",
    });

    function handelValueChange(event) {
        const updatedSpeaker = { ...speaker, [event.target.name] : event.target.value};
        setSpeaker(updatedSpeaker);
    }
    return (
        <>
        <h2>Add Speaker</h2>
        <SpeakerForm speaker={speaker} onChange={handelValueChange}/>
        </>
    );
}

export default AddSpeakerPage;