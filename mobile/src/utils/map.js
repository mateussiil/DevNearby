export function getLongitudeDistanceInMeters(longitudeDelta){
  const earthRadius = 6371e3; // Earth's radius in meters
  const longitudeDistance = longitudeDelta * (Math.PI / 180) * earthRadius;

  return longitudeDistance
}