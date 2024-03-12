export default function cleanSet(set, startString) {
  // Check for valid input types and non-empty startString
  if (
    typeof set !== 'object'
        || !set
        || !Array.isArray([...set]) // Convert set to array for checking length
        || typeof startString !== 'string'
        || startString.length === 0
  ) {
    return '';
  }

  // create an empty array
  const cleanedValues = [];

  // loop through each value in the set
  for (const value of set) {
    // if the value starts with the startString, add it to the cleanedValues array
    if (value.startsWith(startString)) {
      cleanedValues.push(value.slice(startString.length));
    }
  }
  // return the cleanedValues array joined with a hyphen
  return cleanedValues.join('-');
}
