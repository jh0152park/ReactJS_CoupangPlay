import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Wrapper = styled(motion.div)`
    width: 100%;
    height: 700px;
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
    background-position: top center;
    position: absolute;
    width: 100%;
    height: 100%;
    &:hover {
        cursor: default;
    }
`;

export const MainBannerImageVariants = {
    start: (direction: number) => ({
        x: window.outerWidth * direction + 5,
    }),
    end: {
        x: 0,
    },
    exit: (direction: number) => ({
        x: -window.outerWidth * direction - 5,
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
        scale: 1.1;
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
        scale: 1.1;
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

export const Dots = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    position: absolute;
`;

export const Dot = styled(motion.div)<{ focus: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.focus ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)"};

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`;
