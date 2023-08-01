import { styled } from "styled-components";

export const LOGO_URL = "https://assets.coupangplay.com/images/logo.png";
export const SEARCH_URL =
    "https://assets.coupangplay.com/images/svg/search.svg";
export const ARROW_DOWN_URL =
    "https://assets.coupangplay.com/images/svg/icon-arrow-down.svg";

export const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
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
    margin-right: 18px;
`;

export const Menus = styled.div`
    height: 100%;
    display: grid;
    gap: 0px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1.5fr;

    div:last-child {
        width: 100px;
    }
`;

export const Menu = styled.div`
    width: 80px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 11px;
    font-size: 17px;

    &:hover {
        cursor: pointer;
        border-bottom: 1px solid rgba(255, 255, 255);
    }
`;

export const SearchLogo = styled.img`
    scale: 1.5;
    margin-right: 30px;
`;

export const ProfileBox = styled.div`
    width: 65px;
    height: 50px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 5px;

    &:hover {
        cursor: pointer;
        img {
            transform: rotateZ(180deg);
        }
    }
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
`;

export const ArrowDown = styled.img`
    scale: 1;
`;
