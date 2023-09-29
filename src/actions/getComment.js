import axios from 'axios';

export default getComments = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://64d21592f8d60b1743616c85.mockapi.io/test')
      .then(function (response) {
        console.log(response);
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};
