export const getResults = (searchValue) => {
  return new Promise((resolve, reject) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=263d22d8

export const getMovieResults = (searchValue) => {
  return new Promise((resolve, reject) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=${apiKey}`;
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const getSeriesResults = (searchValue) => {
  return new Promise((resolve, reject) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `http://www.omdbapi.com/?s=${searchValue}&type=series&apikey=${apiKey}`;
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
