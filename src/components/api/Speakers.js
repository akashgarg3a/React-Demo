const speakers = require("./Speakers.json");

function getSpeakers() {
    return speakers;
}

function getSpeakerById(id) {
    return speakers[id];
}

function  saveSpeaker(speaker) {
    speaker.speaker_id = speakers.length + 1;
    speaker.speaker_photo = null;
    speakers.push(speaker);
}

export { getSpeakerById, getSpeakers, saveSpeaker};