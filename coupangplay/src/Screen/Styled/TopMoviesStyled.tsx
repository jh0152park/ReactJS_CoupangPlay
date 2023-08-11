import { motion, motionValue } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 210px;
    border: 1px solid azure;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
`;

export const Header = styled.div`
    width: 100%;
    height: 20px;
    font-size: 18px;
    padding-left: 40px;
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
    z-index: 99;
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
    height: 180px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 15px;
    margin-top: 10px;
    box-sizing: border-box;
    overflow: hidden;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;

    border: 1px solid blueviolet;
`;

export const Frame = styled.div`
    height: 180px;
    display: flex;
    justify-content: flex-start;
    align-items: end;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color: rgba(255, 192, 203, 0.1);
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
    /* background-color: pink; */
`;

export const Poster = styled.div<{ BGPhoto?: string }>`
    width: 70%;
    height: 110%;
    background-image: url(${(props) => props.BGPhoto});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
`;

export const RowVariants = {
    start: {
        x: window.outerWidth + 5,
    },
    end: {
        x: 0,
    },
    exit: {
        x: -window.outerWidth - 5,
    },
};

export const TestRow = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    position: absolute;
`;

export const TestBox = styled(motion.div)`
    height: 200px;
    background-color: whitesmoke;
    border-radius: 10px;
`;
