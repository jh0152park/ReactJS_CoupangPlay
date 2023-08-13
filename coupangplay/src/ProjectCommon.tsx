import { atom } from "recoil";

export const SlideVariants = {
    start: (direction: number) => ({
        x: (window.outerWidth + 5) * direction,
    }),
    end: {
        x: 0,
    },
    exit: (direction: number) => ({
        x: (-window.outerWidth - 5) * direction,
    }),
};

export const MouseOnTop20State = atom<boolean>({
    key: "mouseOnTop20",
    default: false,
});

export const BannerDetailState = atom<boolean>({
    key: "bannerDetail",
    default: false,
});

export const BannerClickMovieState = atom<number>({
    key: "bannerClickMovie",
    default: -1,
});

export const BannerClickMovieBGLink = atom<string>({
    key: "bannerClickMovieBGLink",
    default: "",
});

export const LikeMovieState = atom<(number | string)[]>({
    key: "likeMovie",
    default: [],
});
