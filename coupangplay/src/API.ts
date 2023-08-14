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

// "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
//       "genre_ids": [
//         28,
//         12,
//         878
//       ],
//       "id": 667538,
//       "original_language": "en",
//       "original_title": "Transformers: Rise of the Beasts",
//       "overview": "전 우주의 행성을 집어삼키는 절대자, ‘유니크론’의 부하 ‘스커지’는 ‘테러콘’들을 이끌고 지구에 당도한다. 그에 맞서기 위해 지구에 정체를 숨기고 있던 트랜스포머 ‘오토봇’ 군단이 모습을 드러내고 또 다른 트랜스포머 진영인 ‘맥시멀’과 힘을 합친다. 옵티머스 프라임이 이끄는 ‘오토봇’과 옵티머스 프라이멀을 중심으로 한 ‘맥시멀’. 모두의 운명을 건 그들의 압도적 전투가 시작된다!",
//       "popularity": 3137.108,
//       "poster_path": "/chUZNPNd7EiETSB4xBGykXhuXRr.jpg",
//       "release_date": "2023-06-06",
//       "title": "트랜스포머: 비스트의 서막",
//       "video": false,
//       "vote_average": 7.5,
//       "vote_count": 2691
//     },

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

// "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/tT6OSlLvHGM75z2Cvl51WEQ8txU.jpg",
//       "genre_ids": [
//         16,
//         10762,
//         10759,
//         10765
//       ],
//       "id": 4269,
//       "origin_country": [
//         "US"
//       ],
//       "original_language": "en",
//       "original_name": "The Transformers",
//       "overview": "The Transformers is the first animated television series in the Transformers franchise. The series depicts a war among giant robots that can transform into vehicles and other objects.",
//       "popularity": 42.25,
//       "poster_path": "/evcHcl8Q3hCRqEIiUHevrHj3B5p.jpg",
//       "first_air_date": "1984-10-06",
//       "name": "The Transformers",
//       "vote_average": 7.898,
//       "vote_count": 322
//     },
