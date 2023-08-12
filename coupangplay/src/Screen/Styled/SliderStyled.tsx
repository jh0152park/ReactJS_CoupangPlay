import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 250px;
    box-sizing: border-box;
    position: relative;
    border: 1px solid azure;
`;

export const Header = styled.div`
    width: 100%;
    height: 20px;
    font-size: 18px;
    padding-left: 40px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid azure;
`;

export const Frames = styled(motion.div)`
    width: 95%;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
    margin-top: 10px;
    box-sizing: border-box;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;
    /* overflow: hidden; */
    border: 1px solid pink;
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

export const Frame = styled.div<{ BGPhoto?: string }>`
    height: 100%;
    border-radius: 10px;
    background-color: plum;
    position: relative;
    box-sizing: border-box;
    background-image: url(${(props) => props.BGPhoto});
    background-size: cover;
    background-position: top center;
`;
