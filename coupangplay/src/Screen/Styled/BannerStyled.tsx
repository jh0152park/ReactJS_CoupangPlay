import { motion } from "framer-motion";
import { styled } from "styled-components";

export interface IResult {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    name: string;
    vote_average: number;
    vote_count: number;
    overview: string;
}

export interface IData {
    results: IResult[];
}

export const LEFT_ARROW_URL =
    "https://www.coupangplay.com/images/svg/slider-arrow-left.svg";

export const RIGHT_ARROW_URL =
    "https://www.coupangplay.com/images/svg/slider-arrow-right.svg";

export const Wrapper = styled(motion.div)`
    width: 100%;
    height: 550px;
    position: relative;
`;

export const DisplayBox = styled(motion.div)<{ BGPhoto?: string }>`
    background-image: url(${(p) => p.BGPhoto});
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 550px;
    &:hover {
        cursor: default;
    }
`;

export const MainBannerImageVariants = {
    start: {
        x: window.outerWidth + 10,
    },
    end: { x: 0 },
    exit: {
        x: -window.outerWidth - 10,
    },
};

export const LeftArrow = styled.img`
    position: absolute;
    z-index: 99;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
`;

export const RightArrow = styled.img`
    position: absolute;
    z-index: 99;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
`;
