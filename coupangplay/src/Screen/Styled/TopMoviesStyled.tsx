import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 200px;
    padding: 0px 30px;
    border: 1px solid azure;
    box-sizing: border-box;
    position: relative;
`;

export const Header = styled.div`
    width: 100%;
    height: 20px;
    font-size: 18px;
    border: 1px solid azure;
`;

export const LeftArrow = styled.img`
    color: white;
    position: absolute;
    z-index: 99;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    /* opacity: 0; */
    &:hover {
        cursor: pointer;
        scale: 1.1;
        /* opacity: 1;
        transition: opacity 0.2s linear; */
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
    /* opacity: 0; */
    &:hover {
        cursor: pointer;
        scale: 1.1;
        /* opacity: 1;
        transition: opacity 0.2s linear; */
    }
`;

export const Frames = styled.div`
    width: 100%;
    height: 180px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    box-sizing: border-box;
    overflow: hidden;
    gap: 10px;
    border: 1px solid blueviolet;
`;

export const Frame = styled(motion.div)`
    height: 180px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    background-color: pink;
`;
