
const apiKey = '07ded58c34360f4f86b51d9ebde3f40c';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=1`,
  };

  export default requests