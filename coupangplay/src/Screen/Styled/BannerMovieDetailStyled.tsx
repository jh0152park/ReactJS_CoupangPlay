import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Overlay = styled(motion.div)`
    width: 100vw;
    height: 200vh;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
`;

export const MovieDetail = styled(motion.div)`
    width: 700px;
    height: 600px;
    background-color: #171717;
    border-radius: 10px;
    position: absolute;
    box-sizing: border-box;
`;

export const Background = styled.div`
    width: 100%;
    height: 60%;
    box-sizing: border-box;
    overflow: hidden;
`;

export const BackgroundImage = styled.div<{ BGPhoto: string }>`
    width: 100%;
    height: 60%;
    box-sizing: border-box;
    overflow: hidden;
    background-image: linear-gradient(
            270deg,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1)
        ),
        url(${(p) => p.BGPhoto});
    background-size: cover;
    background-position: top center;
`;
