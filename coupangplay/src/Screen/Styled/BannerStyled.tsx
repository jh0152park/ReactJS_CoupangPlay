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
    start: (direction: number) => ({
        x: (window.outerWidth + 10) * direction,
    }),
    end: {
        x: 0,
    },
    exit: (direction: number) => ({
        x: (-window.outerWidth - 10) * direction,
    }),
};

export const LeftArrow = styled.img`
    position: absolute;
    z-index: 99;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    &:hover {
        cursor: pointer;
    }
`;

export const RightArrow = styled.img`
    position: absolute;
    z-index: 99;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    &:hover {
        cursor: pointer;
    }
`;

export const Description = styled.div`
    width: 520px;
    height: 300px;
    position: absolute;
    background-color: darkgray;
    bottom: 100px;
    left: 60px;
`;

export const Title = styled.p`
    text-align: left;
    font-size: 60px;
    margin-bottom: 20px;
`;

export const Information = styled.div`
    width: 100%;
    height: 10%;
    background-color: black;
    font-size: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Star = styled.span`
    color: ${(props) => props.theme.coupangBlue};
    font-size: 20px;
    margin-right: 10px;
`;
