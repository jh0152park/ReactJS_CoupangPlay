import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled(motion.div)`
    width: 100%;
    height: 40%;
    background-color: #151515;
    box-sizing: border-box;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    opacity: 0;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    padding: 5px;
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
    height: 30%;
    font-size: 15px;
    text-align: left;
    /* background-color: pink; */
`;

export const Description = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    /* background-color: darkorange; */
`;

export const Star = styled.span`
    color: ${(props) => props.theme.coupangBlue};
    font-size: 12px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: darkcyan; */
`;

export const LeftButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
`;

export const RightButton = styled.div``;

export const PlayButton = styled.div`
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.coupangBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
`;

export const Img = styled.img`
    width: 27px;
    height: 27px;
`;
