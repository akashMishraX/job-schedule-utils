function getCurrentUnixTimestamp() {
    return Math.floor(Date.now() / 1000);
}

function convertToUnixTimestamp(period) {
    const regex = /^P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)W)?(?:([0-9]+)D)?T?(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?$/;
    const match = period.match(regex);
    if (!match) return null;

    let seconds = 0;

    if (match[1]) seconds += parseInt(match[1]) * 31557600; // Years to seconds
    if (match[2]) seconds += parseInt(match[2]) * 2629746;  // Months to seconds
    if (match[3]) seconds += parseInt(match[3]) * 604800;   // Weeks to seconds
    if (match[4]) seconds += parseInt(match[4]) * 86400;    // Days to seconds
    if (match[5]) seconds += parseInt(match[5]) * 3600;     // Hours to seconds
    if (match[6]) seconds += parseInt(match[6]) * 60;       // Minutes to seconds
    if (match[7]) seconds += parseInt(match[7]);           // Seconds

    return getCurrentUnixTimestamp() + seconds;
}

export default class unixTimestamp {
    static getCurrentUnixTimestamp() {
        return getCurrentUnixTimestamp();
    }

    static convertToUnixTimestamp(period) {
        return convertToUnixTimestamp(period);
    }
}