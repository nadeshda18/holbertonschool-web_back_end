export default function handleResponseFromAPI(promise) {
  return promise
    .then((result) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      console.error('An error occured');
      return new Error();
    });
}
