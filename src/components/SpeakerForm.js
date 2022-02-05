import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function SpeakerForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="first_name"
                label="first_name"
                onChange={props.onChange}
                name="first_name"
                value={props.speaker.first_name}
                error={props.errors.first_name}
            />
            <TextInput
                id="last_name"
                label="last_name"
                onChange={props.onChange}
                name="last_name"
                value={props.speaker.last_name}
                error={props.errors.last_name}
            />
            <TextInput
                id="title"
                label="title"
                onChange={props.onChange}
                name="title"
                value={props.speaker.title}
                error={props.errors.title}
            />
            <TextInput
                id="company"
                label="company"
                onChange={props.onChange}
                name="company"
                value={props.speaker.company}
                error={props.errors.company}
            />
            <TextInput
                id="speaker_bio"
                label="speaker_bio"
                onChange={props.onChange}
                name="speaker_bio"
                value={props.speaker.speaker_bio}
                error={props.errors.speaker_bio}
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

SpeakerForm.prototypes = {
    speaker: PropTypes.object.isRequired,
    onchange: PropTypes.func.isRequired,
    onsubmit: PropTypes.func.isRequired,
    errors: PropTypes.func.isRequired
}

export default SpeakerForm;