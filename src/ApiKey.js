const Api = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`,
  upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`,
  nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`,
};

export default Api;
