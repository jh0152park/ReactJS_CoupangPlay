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
    background-image: linear-gradient(
            270deg,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1)
        ),
        url(${(p) => p.BGPhoto});
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
    bottom: 30px;
    left: 60px;
    overflow: hidden;
    box-sizing: border-box;
`;

export const Title = styled.p`
    text-align: left;
    font-size: 60px;
    margin-bottom: 20px;
`;

export const Information = styled.div`
    width: 100%;
    height: 10%;
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 25px;
`;

export const Star = styled.span`
    color: ${(props) => props.theme.coupangBlue};
    font-size: 20px;
    margin-right: 10px;
`;

export const Play = styled.div`
    width: 300px;
    height: 65px;
    background-color: ${(props) => props.theme.coupangBlue};
    color: ${(props) => props.theme.fontColor};
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;
