function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);

  // Assign the value at the specified position
  int8View[position] = value;

  return int8View; // Return the Int8Array view
}

export default createInt8TypedArray;
