import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 250px;
    box-sizing: border-box;
    position: relative;
    /* border: 1px solid azure; */
`;

export const Header = styled.div`
    width: 100%;
    height: 20px;
    font-size: 18px;
    padding-left: 50px;
    margin-bottom: 10px;
    box-sizing: border-box;
    /* border: 1px solid azure; */
`;

export const Frames = styled(motion.div)`
    width: 95%;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    margin-top: 10px;
    box-sizing: border-box;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;
    /* overflow: hidden; */
    /* border: 1px solid pink; */

    div:first-child {
        transform-origin: center left;
    }
    div:last-child {
        transform-origin: center right;
    }
`;

export const LeftArrow = styled.img`
    color: white;
    position: absolute;
    z-index: 98;
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
    color: white;
    position: absolute;
    z-index: 98;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`;

export const Frame = styled(motion.div)<{ BGPhoto?: string }>`
    height: 100%;
    border-radius: 5px;
    /* background-color: plum; */
    position: relative;
    box-sizing: border-box;
    background-image: url(${(props) => props.BGPhoto});
    background-size: cover;
    background-position: top center;
    &:hover {
        cursor: pointer;
    }
`;

export const FrameVariants = {
    hover: {
        zIndex: 99,
        scale: 1.5,
        y: -60,
        transition: {
            delay: 0.7,
            duration: 0.3,
            type: "tween",
        },
    },
};
