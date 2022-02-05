import React, { useState } from "react";
import SpeakerForm from "./SpeakerForm";
import { saveSpeaker } from "./api/Speakers";
import { toast } from "react-toastify";

const AddSpeakerPage = props => {
    const [errors, setErrors] = useState({});
    const [speaker, setSpeaker] = useState({
        speaker_id: null,
        first_name: "",
        last_name: "",
        title: "",
        company: "",
        speaker_bio: "",
        speaker_photo: "",
    });

    function formIsValid() {
        const _errors = {};
        if(!speaker.speaker_bio) _errors.speaker_bio = "speaker_bio is required";
        if(!speaker.first_name) _errors.first_name = "first_name is required";
        if(!speaker.last_name) _errors.last_name = "last_name is required";
        if(!speaker.title) _errors.title = "title is required";
        if(!speaker.company) _errors.company = "company is required";
        setErrors(_errors);
        // Form is valid is the Error object has no properties
        return Object.keys(_errors).length === 0;
    }
    function handelValueChange(event) {
        const updatedSpeaker = { ...speaker, [event.target.name] : event.target.value};
        setSpeaker(updatedSpeaker);
    }

    function handelSave(event) {
        event.preventDefault();
        if(!formIsValid()) {
            return;
        }
        saveSpeaker(speaker);
        props.history.push("/speakers");
        toast.success('Speaker Added.');
    }
    return (
        <>
        <h2>Add Speaker</h2>
        <SpeakerForm errors={errors} speaker={speaker} onChange={handelValueChange} onSubmit={handelSave}/>
        </>
    );
}

export default AddSpeakerPage;