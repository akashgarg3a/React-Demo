import React from "react";
import PropTyes from "prop-types";

function SpeakerList(props) {
    return (
        <>
        <table className="table">
            <thead>
                <tr>
                    <th>Speaker_ID</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>title</th>
                    <th>company</th>
                    <th>speaker_bio</th>
                    <th>speaker_photo</th>
                </tr>
            </thead>
            <tbody>
                { props.speakers.map(speaker => {
                    return (
                        <tr key={speaker.speaker_id}>
                            <td>{speaker.speaker_id}</td>
                            <td>{speaker.first_name}</td>
                            <td>{speaker.last_name}</td>
                            <td>{speaker.title}</td>
                            <td>{speaker.company}</td>
                            <td>{speaker.speaker_bio}</td>
                            <td>{<img src="speaker.speaker_photo" alt="null"></img>}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table></>
    );
}

SpeakerList.prototype = {
    courses : PropTyes.array.isRequired
}

// SpeakerList.defaulProps = {
//     courses : []
// }

export default SpeakerList;