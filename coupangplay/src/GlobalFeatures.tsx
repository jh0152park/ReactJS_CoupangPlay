import { atom } from "recoil";

export const LEFT_ARROW_URL =
    "https://www.coupangplay.com/images/svg/slider-arrow-left.svg";

export const RIGHT_ARROW_URL =
    "https://www.coupangplay.com/images/svg/slider-arrow-right.svg";

export const QUESTION_MARK_URL =
    "https://cdn-icons-png.flaticon.com/512/9796/9796625.png";

export const ADD_BUTTON_URL =
    "https://assets.coupangplay.com/assets/icons/icon-mylist-add-hover.svg";

export const LARGE_ADD_BUTTON_URL =
    "https://assets.coupangplay.com/assets/icons/icon-large-add.svg";

export const INFO_BUTTON_URL =
    "https://assets.coupangplay.com/assets/icons/icon-large-info-hover.svg";

export const SHARE_BUTTON_URL =
    "https://assets.coupangplay.com/assets/icons/icon-share.svg";

export const LARGE_ADDED_BUTTON_URL =
    "https://assets.coupangplay.com/assets/icons/icon-large-add-added.svg";

export const COUPANGPLAY_ENTIRE_LOGO_URL =
    "https://assets.coupangplay.com/images/logo_coupangplay2.png";

export const YOUTUBE_LOGO_URL =
    "https://assets.coupangplay.com/images/socials/social-yt.png";

export const FB_LOGO_URL =
    "https://assets.coupangplay.com/images/socials/social-fb.png";

export const IG_LOGO_URL =
    "https://assets.coupangplay.com/images/socials/social-ig.png";

export const TWITTER_LOGO_URL =
    "https://assets.coupangplay.com/images/socials/social-tw.png";

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

export interface IGenre {
    id: number;
    name: string;
}

export interface IProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface IDetail {
    backdrop_path: string;
    poster_path: string;
    genres: IGenre[];
    homepage: string;
    overview: string;
    release_date: string;
    runtime: number;
    title: string;
    vote_average: number;
    vote_count: number;
    production_companies: IProductionCompany[];
}

export interface IBackdrops {
    aspect_ratio: number;
    height: number;
    vote_average: number;
    vote_count: number;
    width: number;
    file_path: string;
    iso_639_1: string | null;
}

export interface ILogo {
    aspect_ratio: number;
    height: number;
    vote_average: number;
    vote_count: number;
    width: number;
    iso_639_1: string | null;
    file_path: string;
}

export interface IImages {
    id: number;
    backdrops: IBackdrops[];
    logos: ILogo[];
}

export interface ITVResult {
    genre_ids: number[];
    origin_country: string[];
    backdrop_path: string;
    first_air_date: string;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    id: number;
    popularity: number;
    vote_average: number;
    vote_count: number;
}
