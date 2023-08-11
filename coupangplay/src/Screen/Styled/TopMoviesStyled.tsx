import { motion, motionValue } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 250px;
    /* border: 1px solid azure; */
    box-sizing: border-box;
    /* overflow: hidden; */
    position: relative;
`;

export const Header = styled.div`
    width: 100%;
    height: 20px;
    font-size: 18px;
    padding-left: 40px;
    margin-bottom: 10px;
    box-sizing: border-box;
    /* border: 1px solid azure; */
`;

export const LeftArrow = styled.img`
    color: white;
    position: absolute;
    z-index: 98;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;

    // used below marign top only at row of movies frames
    margin-top: 95px;
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

    // used below marign top only at row of movies frames
    margin-top: 95px;
    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`;

export const Frames = styled(motion.div)`
    width: 95%;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 15px;
    margin-top: 10px;
    box-sizing: border-box;
    /* overflow: hidden; */
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;

    /* div: {
        transform-origin: top right;
    } */

    /* border: 1px solid blueviolet; */
`;

export const Frame = styled.div`
    height: 180px;
    display: flex;
    justify-content: flex-start;
    align-items: end;
    box-sizing: border-box;
    /* overflow-x: hidden; */
    /* background-color: rgba(255, 192, 203, 0.1); */
`;

export const Rank = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    color: black;
    font-size: 50px;
    font-weight: bold;
    text-shadow: -1px 1px 8px ${(props) => props.theme.coupangBlue};
    margin-right: -20px;
    /* background-color: pink; */
`;

export const Poster = styled(motion.div)<{ BGPhoto?: string }>`
    width: 55%;
    height: 100%;
    background-image: url(${(props) => props.BGPhoto});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    position: relative;
    /* box-sizing: border-box;
    overflow: auto; */
    border: none;

    &:hover {
        cursor: pointer;
    }
`;

export const PosterBadige = styled(motion.div)`
    width: 60px;
    height: 22px;
    font-size: 13px;
    background-color: black;
    border: 1px solid gray;
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
        color: ${(props) => props.theme.coupangBlue};
        &::after {
            content: " ";
        }
    }
`;

export const PosterVariants = {
    normal: {
        scale: 1,
    },
    hover: {
        cursor: "pointer",
        zIndex: 98,
        width: "300px",
        height: "300px",
        transition: {
            delay: 0.3,
            duration: 0.3,
            type: "tween",
        },
    },
};
