import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Overlay = styled(motion.div)`
    width: 100vw;
    height: 200vh;
    background-color: rgba(154, 205, 50, 0.2);
    position: absolute;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MovieDetail = styled(motion.div)`
    width: 700px;
    height: 600px;
    background-color: #171717;
    border-radius: 10px;
    position: absolute;
    z-index: 99;
`;
