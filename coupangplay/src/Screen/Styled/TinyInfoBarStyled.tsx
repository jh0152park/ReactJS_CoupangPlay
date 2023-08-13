import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled(motion.div)`
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    background-color: #151515;
    box-sizing: border-box;
    padding: 5px 5px;
    opacity: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const Title = styled.span`
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 20px;
    font-size: 20px;
    text-align: left;
    margin-top: 10px;
`;

export const Description = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    margin-top: -10px;
`;

export const Star = styled.span`
    color: ${(props) => props.theme.coupangBlue};
    font-size: 10px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -5px;
`;

export const LeftButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
`;

export const RightButton = styled.div``;

export const PlayButton = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.coupangBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
`;

export const NormalButton = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: whitesmoke;
    border: 1px solid #9e9e9e;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 30px;
    height: 30px;
`;

export const InfobarVariants = {
    hover: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.3,
            type: "tween",
        },
    },
};
