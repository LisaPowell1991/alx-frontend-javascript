export default function cleanSet(set, startString) {
  // Check if set is an object and startString is a non-empty string
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  // create an empty array
  const cleanedValues = [];

  // loop through each value in the set
  for (const value of set) {
    // if the value starts with the startString, add it to the cleanedValues array
    if (value && value.startsWith(startString)) {
      // Adjust slicing based on whether startString is provided or not
      cleanedValues.push(startString === '' ? value : value.slice(startString.length));
    }
  }
  // return the cleanedValues array joined with a hyphen
  return cleanedValues.join('-');
}
