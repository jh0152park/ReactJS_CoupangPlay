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
`;

export const MovieDetail = styled(motion.div)`
    width: 700px;
    height: 600px;
    background-color: #171717;
    border-radius: 10px;
    position: absolute;
`;

export const OverlayVariants = {
    initial: {
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
    animate: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    exit: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        transition: {
            type: "tween",
            duration: 0.5,
        },
    },
};
