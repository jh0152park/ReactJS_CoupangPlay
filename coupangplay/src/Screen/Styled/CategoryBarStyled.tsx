import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled(motion.div)`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 60px;
    overflow: hidden;
`;

export const Category = styled(motion.div)<{ length: number }>`
    color: ${(props) => props.theme.coupangBlue};
    background-color: rgba(10, 45, 66, 1);
    margin-right: 20px;
    min-width: ${(props) => props.length}px;
    height: 45px;
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;

    &:hover {
        cursor: pointer;
        background-color: rgb(18, 78, 116);
    }
`;
