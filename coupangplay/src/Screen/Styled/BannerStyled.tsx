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
`;

export const MainBannerImageVariants = {
    start: { x: 500 },
    end: { x: 0 },
    exit: { x: -500 },
};
