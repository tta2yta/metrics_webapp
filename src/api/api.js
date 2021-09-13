export const getCountries = async () => {
  const response = await fetch('https://restcountries.com/v3/all', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    mode: 'cors',
  }).then((res) => res.json())
    .catch((err) => err);

  return response;
};

export default getCountries;
