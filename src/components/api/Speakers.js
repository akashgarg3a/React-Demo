const speakers = require("./Speakers.json");

function getSpeakers() {
    return speakers;
}

function getSpeakerById(id) {
    return speakers[id];
}

export { getSpeakerById, getSpeakers};
