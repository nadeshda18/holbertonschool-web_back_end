function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('true');
    });
  });
}
export default getResponseFromAPI;
