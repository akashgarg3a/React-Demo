import React from "react";
import TextInput from "./common/TextInput";

function SpeakerForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="first_name"
                label="first_name"
                onChange={props.onChange}
                name="first_name"
                value={props.speaker.first_name}
            />
            <TextInput
                id="last_name"
                label="last_name"
                onChange={props.onChange}
                name="last_name"
                value={props.speaker.last_name}
            />
            <TextInput
                id="title"
                label="title"
                onChange={props.onChange}
                name="title"
                value={props.speaker.title}
            />
            <TextInput
                id="company"
                label="company"
                onChange={props.onChange}
                name="company"
                value={props.speaker.company}
            />
            <TextInput
                id="speaker_bio"
                label="speaker_bio"
                onChange={props.onChange}
                name="speaker_bio"
                value={props.speaker.speaker_bio}
            />
            {/* <TextInput
                id="speaker_photo"
                label="speaker_photo"
                onChange={props.onChange}
                name="speaker_photo"
                value={props.speaker.speaker_photo}
            /> */}
            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

export default SpeakerForm;