function distanceFromHqInBlocks(street) {
    const hqStreet = 42; 
    return Math.abs(street - hqStreet); 
}
function distanceFromHqInFeet(street) {
    const hqStreet = 42; 
    const feetPerBlock = 264;
    return Math.abs(street - hqStreet) * feetPerBlock;
}
function distanceTravelledInFeet(start, detination) {
    const feetPerBlock = 264;

    return Math.abs(detination - start) * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
const feetPerBlock = 264; 
    const distance = Math.abs(destination - start) * feetPerBlock;

    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}