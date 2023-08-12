import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled(motion.div)`
    width: 100%;
    height: 30%;
    background-color: #151515;
    box-sizing: border-box;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
`;

export const InfoBarVariant = {
    initial: { backgroundColor: "blue" },
    hover: {
        backgroundColor: "red",
    },
};
