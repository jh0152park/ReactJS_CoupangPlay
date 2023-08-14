import { motion } from "framer-motion";
import { styled } from "styled-components";

export const LOGO_URL = "https://assets.coupangplay.com/images/logo.png";
export const SEARCH_URL =
    "https://assets.coupangplay.com/images/svg/search.svg";
export const ARROW_DOWN_URL =
    "https://assets.coupangplay.com/images/svg/icon-arrow-down.svg";

export const Wrapper = styled(motion.div)`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 99;
    position: fixed;
`;

export const LeftNavigation = styled.div`
    width: 80%;
    height: 100%;
    padding-left: 45px;
    display: flex;
    align-items: center;
`;

export const RightNavigation = styled.div`
    width: 20%;
    height: 100%;
    padding-right: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Logo = styled.img`
    width: 40px;
    height: 35px;
    margin-right: 10px;
    &:hover {
        scale: 1.1;
        transition: scale 0.2s linear;
    }
`;

export const Menus = styled.div`
    min-width: 600px;
    max-width: 600px;
    /* background-color: pink; */
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1.5fr;

    /* div:last-child {
        width: 100px;
    } */
`;

export const Menu = styled.div<{ location: boolean }>`
    /* width: 80px; */
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 11px;

    color: ${(props) =>
        props.location ? props.theme.coupangBlue : props.theme.fontColor};
    font-weight: ${(props) => (props.location ? "700" : "300")};
    font-size: ${(props) => (props.location ? "22" : "17")}px;

    &:hover {
        cursor: pointer;
        border-bottom: 1px solid rgba(255, 255, 255);
    }
`;

export const SearchLogo = styled.img`
    scale: 1.5;
    margin-right: 30px;
    &:hover {
        cursor: pointer;
        scale: 1.7;
    }
`;

export const ProfileBox = styled(motion.div)`
    width: 65px;
    height: 70px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 5px;
`;

export const Profile = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid rgb(255, 255, 255);
    background-color: rgb(94, 42, 197);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        ~ img {
            transform: rotateZ(180deg);
        }
        ~ div {
            opacity: 1;
        }
    }
`;

export const ArrowDown = styled(motion.img)`
    scale: 1;
    &:hover {
        cursor: pointer;
        transform: rotateZ(180deg);
        ~ div {
            opacity: 1;
        }
    }
`;

export const ProfileMenuBox = styled(motion.div)`
    width: 130px;
    height: 250px;
    background-color: #262626;
    position: absolute;
    border-radius: 5px;
    top: 60px;
    right: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    &:hover {
        opacity: 0;
    }
`;

export const ProfileMenu = styled.div`
    width: 100%;
    height: 30px;
    color: "#9B9B9B";
    display: flex;
    margin-left: 60px;
    align-items: center;
    font-weight: 100;
`;

export const HeaderVariants = {
    top: {
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
    scroll: {
        backgroundColor: "rgba(0, 0, 0, 1)",
    },
};
