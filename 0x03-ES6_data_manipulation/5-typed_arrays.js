export default function createInt8TypedArray(length, position, value) {
  // outside of range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new buffer of length
  const buffer = new ArrayBuffer(length);

  // Create a new Int8Array with the buffer
  const int8Array = new Int8Array(buffer);

  // Set the position to the value
  int8Array[position] = value;

  // Create a DataView from the buffer and return it
  return new DataView(buffer);
}
