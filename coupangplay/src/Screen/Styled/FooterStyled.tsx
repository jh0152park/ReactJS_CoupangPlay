import { styled } from "styled-components";

export const FooterWrapper = styled.div`
    width: 100%;
    height: 500px;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: end;
`;

export const Contrainer = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    height: 55%;
    width: 75%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);

    div:first-child {
        & p {
            padding-left: 10px;
        }
    }

    div:last-child {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        padding-left: 40px;
        padding-top: 15px;
        & img {
            width: 40px;
            height: 40px;
        }
    }
`;

export const Column = styled.div`
    height: 100%;
    line-height: 1.5;
    font-weight: 300;
    a {
        color: ${(props) => props.theme.coupangBlue};
        &:hover {
            cursor: pointer;
        }
    }
`;
