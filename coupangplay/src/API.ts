export function createImagePath(image: string, size?: number) {
    let URL = "https://image.tmdb.org/t/p/";
    URL += (size ? `w${size}` : "original") + "/" + image;

    return URL;
}

// Get Movie List Functions
export async function getNowPlayingMovieList(page: number) {
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

export async function getPopularMovieList(page: number) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`,
        options
    ).then((response) => response.json());
}

export async function getTopRatedMovieList(page: number) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=${page}`,
        options
    ).then((response) => response.json());
}

export async function getUpComingMovieList(page: number) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=${page}`,
        options
    ).then((response) => response.json());
}

// Get Movie Detail Information Functions
export async function getMovieDetail(id: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
        options
    ).then((response) => response.json());
}

export async function getMovieDetailEN(id: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options
    ).then((response) => response.json());
}

export async function getMovieVideoInfo(id: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
    ).then((response) => response.json());
}

export async function getMovieImages(id: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/images`,
        options
    ).then((response) => response.json());
}

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
///////////// TV API ///////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
// 1396
export async function getAiringTodayTV(page: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/tv/airing_today?language=ko-KR&page=${page}`,
        options
    ).then((response) => response.json());
}

export async function getOnTheAirTV(page: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?language=ko-KR&page=${page}`,
        options
    ).then((response) => response.json());
}

export async function getPopularTV(page: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=${page}`,
        options
    ).then((response) => response.json());
}

export async function getTopRatedTV(page: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/tv/top_rated?language=ko-KR&page=${page}`,
        options
    ).then((response) => response.json());
}

export async function getTVDetail(id: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/tv/${id}?language=ko-KR`,
        options
    ).then((response) => response.json());
}

export async function getTVDetailEN(id: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
        options
    ).then((response) => response.json());
}

export async function getTVVideoInfo(id: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
        options
    ).then((response) => response.json());
}

export async function getTVImages(id: string | number) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(`https://api.themoviedb.org/3/tv/${id}/images`, options).then(
        (response) => response.json()
    );
}

//
//
// SEARCH
//
//

export async function SearchMovie(keyword: string, page: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=true&language=ko-KR&page=${page}`,
        options
    ).then((response) => response.json());
}

export async function SearchTV(keyword: string, page: number | string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/search/tv?query=${keyword}&include_adult=true&language=ko-KR&page=${page}`,
        options
    ).then((response) => response.json());
}
