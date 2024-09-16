const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5b976f339a8d6c071cee861e11ace845',
    originalImage: (imgPath) => 'https://image.tmdb.org/t/p/original/${imgPath}',
    w500Image: (imgPath) => 'https://image.tmdb.org/t/p/w500/${imgPath}',
}

export default apiConfig;