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
    gap: 15px;
    border: 1px solid blueviolet;
    padding: 0 10px;
`;

export const Frame = styled(motion.div)`
    height: 180px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    box-sizing: border-box;
    background-color: rgba(255, 192, 203, 0);
`;

export const Rank = styled(motion.div)`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    color: black;
    font-size: 50px;
    font-weight: bold;
    margin-right: 10px;
    text-shadow: -1px 1px 8px ${(props) => props.theme.coupangBlue};
`;

export const Poster = styled(motion.div)<{ BGPhoto?: string }>`
    width: 80%;
    height: 100%;
    background-image: url(${(props) => props.BGPhoto});
    background-size: cover;
    background-position: center;
    /* background-color: pink; */
`;
