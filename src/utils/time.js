function timeToString(secs) {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs % 3600) / 60);
    return `${hours}h ${minutes}m`;
}

export {timeToString}