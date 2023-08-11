export const LEFT_ARROW_URL =
    "https://www.coupangplay.com/images/svg/slider-arrow-left.svg";

export const RIGHT_ARROW_URL =
    "https://www.coupangplay.com/images/svg/slider-arrow-right.svg";

export const QUESTION_MARK_URL =
    "https://cdn-icons-png.flaticon.com/512/9796/9796625.png";

export interface IResult {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    name: string;
    vote_average: number;
    vote_count: number;
    overview: string;
    release_date?: string;
}

export interface IData {
    results: IResult[];
}
