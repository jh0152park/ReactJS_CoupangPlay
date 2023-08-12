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
    opacity: 1;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    /* display: flex;
    align-items: center;
    justify-content: flex-start; */
`;

export const InfoBarVariant = {
    hover: {
        opacity: 1,
        transition: {
            delay: 0.7,
            duration: 0.3,
            type: "tween",
        },
    },
};

export const Title = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 50%;
    font-size: 18px;
    text-align: left;
    padding: 5px;
    background-color: pink;
`;

export const Description = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    padding-left: 5px;
    background-color: darkorange;
`;

export const Star = styled.span`
    color: ${(props) => props.theme.coupangBlue};
    font-size: 10px;
`;
