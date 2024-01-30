export default function createInt8TypedArray(lenght, position, value) {
  if (position >= lenght) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(lenght);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
