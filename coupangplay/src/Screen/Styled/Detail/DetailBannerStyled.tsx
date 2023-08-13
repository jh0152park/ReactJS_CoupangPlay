import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: inherit;
    position: relative;
`;

export const DisplayBox = styled.div<{ BGPhoto?: string }>`
    background-image: linear-gradient(
            270deg,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1)
        ),
        url(${(p) => p.BGPhoto});
    background-size: cover;
    background-position: top center;
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
`;

export const Description = styled.div`
    width: 40%;
    height: 60%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    margin-left: 30px;
`;

export const Logo = styled.div`
    width: 100%;
    height: 30%;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const LogoImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;

export const LogoTitle = styled.p`
    font-size: 60px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Summary = styled.div`
    height: 10%;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
`;

export const Star = styled.span`
    color: ${(props) => props.theme.coupangBlue};
`;

export const Buttons = styled.div`
    width: 70%;
    height: 15%;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export const Play = styled(motion.div)`
    width: 60%;
    height: 80%;
    background-color: ${(props) => props.theme.coupangBlue};
    color: ${(props) => props.theme.fontColor};
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.1s linear;
    }
`;

export const ButtonContainer = styled.div`
    width: 13%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`;

export const ButtonImg = styled.img`
    width: 33px;
    height: 33px;
`;

export const Text = styled.p`
    color: rgb(245, 245, 245, 0.5);
    font-size: 12px;
`;

export const Overview = styled.div`
    width: 100%;
    height: 25%;
    overflow: hidden;
    font-size: 19px;
    line-height: 1.5;
`;

export const Extra = styled.div`
    width: 100%;
    height: 20%;
    overflow: hidden;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);

    p span {
        margin-right: 5px;
    }
`;

export const LeftArrow = styled.img`
    position: absolute;
    left: 10px;
    top: 70px;
    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`;

export const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
`;

export const VideoFrame = styled(motion.div)`
    width: 960px;
    height: 540px;
    background-color: black;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 5px;
`;

export const BGImage = styled(motion.div)<{ BGPhoto: string }>`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
            270deg,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1)
        ),
        url(${(p) => p.BGPhoto});
    background-size: cover;
    background-position: top center;
`;
