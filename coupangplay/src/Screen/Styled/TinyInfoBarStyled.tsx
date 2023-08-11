import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled(motion.div)`
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0;
    display: block;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #151515;
    box-sizing: border-box;
    padding: 3px 5px;

    opacity: 0;
`;

export const Title = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 20%;
    font-size: 12px;
    margin-top: 5px;
`;

export const Description = styled.div`
    margin: 5px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 10px;
`;

export const Star = styled.span`
    color: ${(props) => props.theme.coupangBlue};
    font-size: 10px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LeftButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
`;

export const RightButton = styled.div``;

export const PlayButton = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.coupangBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9px;
`;

export const NormalButton = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    color: whitesmoke;
    border: 1px solid #9e9e9e;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InfobarVariants = {
    hover: {
        opacity: 1,
        transition: {
            duration: 0.3,
            type: "tween",
        },
    },
};
