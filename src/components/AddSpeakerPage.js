import React, { useState } from "react";
import SpeakerForm from "./SpeakerForm";
import { saveSpeaker } from "./api/Speakers";

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

    function handelSave(event) {
        event.preventDefault();
        saveSpeaker(speaker);
        props.history.push("/speakers");
    }
    return (
        <>
        <h2>Add Speaker</h2>
        <SpeakerForm speaker={speaker} onChange={handelValueChange} onSubmit={handelSave}/>
        </>
    );
}

export default AddSpeakerPage;