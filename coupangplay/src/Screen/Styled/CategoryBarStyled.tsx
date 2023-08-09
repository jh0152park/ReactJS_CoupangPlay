import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled(motion.div)`
    width: 90%;
    height: 120px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 60px;
    overflow: hidden;
    position: relative;
`;

export const Category = styled(motion.div)<{ length: number }>`
    color: ${(props) => props.theme.coupangBlue};
    background-color: rgba(10, 45, 66, 1);
    margin-right: 15px;
    min-width: ${(props) => props.length}px;
    height: 45px;
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;

    &:hover {
        cursor: pointer;
        background-color: rgb(18, 78, 116);
    }
`;

export const LeftArrow = styled.img`
    color: white;
    position: absolute;
    z-index: 99;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    opacity: 0;
    &:hover {
        cursor: pointer;
        scale: 1.1;
        opacity: 1;
        transition: opacity 0.2s linear;
    }
`;

export const RightArrow = styled.img`
    color: white;
    position: absolute;
    z-index: 99;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    opacity: 0;
    &:hover {
        cursor: pointer;
        scale: 1.1;
        opacity: 1;
        transition: opacity 0.2s linear;
    }
`;

export const GenresCategoriesVariants = {
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
