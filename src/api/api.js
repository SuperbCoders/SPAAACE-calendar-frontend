const baseUrl = 'https://sync.spaaace.io';

export const getAllProducts = () => {
  return fetch(`${baseUrl}/api/products`)
    .then((data) => data.json())
    .then((data) => data);
};

export const requestToBooking = (data) => {
  return fetch(`${baseUrl}/api/book`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => data);
};

export const getInformationAboutBooking = (from, to) => {
  return fetch(`${baseUrl}/api/get?from=${from}&to=${to}`)
    .then((data) => data.json())
    .then((data) => data);
};
