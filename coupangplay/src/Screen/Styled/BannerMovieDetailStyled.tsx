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

export const BackgroundImage = styled.div`
    width: 100%;
    height: 60%;
    background-color: yellowgreen;
`;
