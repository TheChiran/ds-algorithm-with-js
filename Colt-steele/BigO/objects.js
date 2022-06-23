// let instructor = {
//   firstName: "Kelly",
//   isInstructor: true,
//   favoriteNumbers: [1, 2, 3, 4]
// }

// Object.keys(instructor).map(key => {
//   console.log(key)
// });
// Object.entries(instructor).map(entry => console.log(entry))
import https from 'https';
const fetch = (url) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          resolve(JSON.parse(data));
        });
      })
      .on('error', (err) => {
        reject(err.message);
      });
  });
};

const getAPIURL = (year, page) => {
  return `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`;
};

const getFootballMatches = (year, page) => {
  const url = getAPIURL(year, page);
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((jsonRespone) => resolve(jsonRespone))
      .catch((e) => reject(e.message));
  });
};
async function getTeams(year, k) {
  // write your code here
  // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>

  const matchesPerTeam = {};
  let initialPage = 1;
  let totalPages = 1;
  while (initialPage <= totalPages) {
    const {
      total_pages,
      data: matches
    } = await getFootballMatches(
      year,
      initialPage,
    );

    matches.forEach(({
      team1,
      team2
    }) => {
      matchesPerTeam[team1] = (matchesPerTeam[team1] || 0) + 1;
      matchesPerTeam[team2] = (matchesPerTeam[team2] || 0) + 1;
    });
    totalPages = total_pages;
    initialPage += 1;
  }
  return Object.entries(matchesPerTeam)
    .filter(([, numOfMatches]) => numOfMatches >= k)
    .map(([team]) => team)
    .sort();
}
const res = await getTeams(2015, 13);
console.log('response', res);