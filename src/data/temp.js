// const URL = 'https://raw.githubusercontent.com/CodingWith-Adam/geoJson-map-with-react-leaflet/master/src/data/countries.json';
// const countries = ['Belarus', 'RUS', 'POL', 'USA', 'NLD', 'BRA', 'GBR', 'JPN', 'PER'];

// fetch(URL)
//   .then(res => res.json())
//   .then(data => {
//     const { features } = data;
//     const countries = features.filter((elem) => {
//       const { properties: { ISO_A3 } } = elem;
//       return countries.includes(ISO_A3);
//     });
//   })



// //App
//   // TEMPERORALLY ADDED CODE

// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// interface Location {
//   [iso: string]: {
//     coord: number[],
//     path: string
//   }
// }

// // TEMPERORALLY ADDED CODE

// // TEMPERORALLY ADDED CODE

// useEffect(() => {
//   const URL = 'https://raw.githubusercontent.com/CodingWith-Adam/geoJson-map-with-react-leaflet/master/src/data/countries.json';
//   const countries = [
//     'RUS',
//     //'POL',
//     'USA',
//     //'NLD',
//     //'BRA',
//     'GBR',
//     'JPN',
//     //'PER'
//   ];

//   const location:Location = {
//     'RUS': {
//       coord: [55.751244, 37.618423],
//       path: 'Russia'
//     },
//     'POL': {
//       coord: [52.237049, 21.017532],
//       path: 'Poland'
//     },
//     'USA': {
//       coord: [38.89511, -77.03637],
//       path: 'USA'
//     },
//     'NLD': {
//       coord: [52.371807, 4.896029],
//       path: 'Netherlands'
//     },
//     'GBR': {
//       coord: [51.509865, -0.118092],
//       path: 'England'
//     },
//     'BRA': {
//       coord: [-15.793889, -47.882778],
//       path: 'Brazil'
//     },
//     'JPN': {
//       coord: [35.652832, 139.839478],
//       path: 'Japan'
//     },
//     'PER': {
//       coord: [-12.046374, -77.042793],
//       path: 'Peru'
//     }
//   }

//   fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//       const { features } = data;
//       const countriesArr = features.filter((elem: any) => {
//         const { properties: { ISO_A3 } } = elem;
//         return countries.includes(ISO_A3);
//       })
//       countriesArr.map((el: any) => {
//           const { geometry: { coordinates }, properties: { ISO_A3 } } = el;
//           const dataSend = {
//             path: location[ISO_A3].path,
//             location: location[ISO_A3].coord,
//             coordinates: coordinates
//           }
//           // postData(COORDINATES_API_URL, dataSend)
//           //   .then(data => {
//           //     console.log(data); // JSON data parsed by `data.json()` call
//           //   });
//           // console.log(dataSend)
//         })
//     });

// }, []);


// // TEMPERORALLY ADDED CODE
