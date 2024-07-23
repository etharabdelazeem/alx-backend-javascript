export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (let idx of array) {
    const value = idx;
    idx = appendString + value;
    result.push(idx);
  }

  return result;
}
