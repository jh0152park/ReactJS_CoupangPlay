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
    border: 1px solid darkgreen;
`;

export const Logo = styled.div`
    width: 100%;
    height: 30%;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid pink;
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
    border: 1px solid blue;
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
    gap: 30px;
    border: 1px solid red;
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
    width: 15%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    border: 1px solid yellow;
`;

export const Share = styled.div`
    width: 15%;
    height: 80%;
    border: 1px solid green;
`;

export const Button = styled.div`
    width: 30px;
    height: 30px;
    background-color: none;
    border: 2px solid whitesmoke;
    border-radius: 50%;
`;

export const Text = styled.p`
    color: rgb(245, 245, 245, 0.5);
    font-size: 10px;
`;
