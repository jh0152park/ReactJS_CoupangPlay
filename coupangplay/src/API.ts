export function createImagePath(image: string, size?: number) {
    let URL = "https://image.tmdb.org/t/p/";
    URL += size ? `w${size}` : "original" + "/" + image;
    return URL;
}

export function getNowPlayingMovieList(page: number) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=${page}`,
        options
    ).then((response) => response.json());
}
