export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  const newSet = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      newSet.push(value.slice(startString.length));
    }
  });
  return newSet.join('-');
}
