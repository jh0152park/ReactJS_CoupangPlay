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

export const Wrapper = styled(motion.div)<{ BGPhoto?: string }>`
    width: 100%;
    height: 550px;
    background-image: url(${(p) => p.BGPhoto});
    background-size: cover;
`;
