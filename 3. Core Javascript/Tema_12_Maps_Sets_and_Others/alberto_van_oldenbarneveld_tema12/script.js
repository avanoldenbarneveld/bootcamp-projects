function getValuesInRange(set, lowerBound, upperBound) {
  if (!(set instanceof Set)) {
    throw new TypeError('Expected a Set as the first argument');
  }
  if (typeof lowerBound !== 'number' || typeof upperBound !== 'number') {
    throw new TypeError('Bounds must be numbers');
  }

  return new Set([...set].filter(n => typeof n === 'number' && n >= lowerBound && n <= upperBound));
}
  
module.exports = getValuesInRange;