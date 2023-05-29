// pages/api/getData.js

export default async function handler(req, res) {
  try {
    // Make the API call to your backend and retrieve the data
    const headers = {
      'Content-Type': 'application/json',
      Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2Y2QzMjIzMDUyNzAwMTIzMTU4MDZmIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhcmFmYXRAZ21haWwuY29tIn0sInN1YiI6ImFyYWZhdEBnbWFpbC5jb20iLCJpYXQiOjE2ODQ4NTM2NDIsImV4cCI6MTY4NzQ0NTY0Mn0.XkWI1q8e4JyQIXc7AfGaB7ATP0wR5w4J0P9X8QQECz43UGMauqvlKK0liiLegndgUOv8xkD_LJdr8VUbasXi3Q"
    };

    const response = await fetch("http://170.64.248.93/customers?page=0&size=4&search=", {headers});
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving data' });
  }
}
