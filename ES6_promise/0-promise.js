function getResponseFromAPI() {
  // eslint-disable-next-line
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('true');
    });
  });
}
export default getResponseFromAPI;
