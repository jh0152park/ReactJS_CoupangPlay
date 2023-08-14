import { styled } from "styled-components";

export const Wrapper = styled.div<{ img: string }>`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
            270deg,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1)
        ),
        url(${(p) => p.img});
    background-size: cover;
    background-position: top center;
    display: flex;
    justify-content: center;
    align-items: start;
`;

export const MessageBox = styled.div`
    width: 40%;
    height: 15%;
    margin-top: 150px;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 30px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
`;
