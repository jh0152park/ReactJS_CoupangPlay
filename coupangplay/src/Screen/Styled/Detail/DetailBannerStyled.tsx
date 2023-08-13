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
    height: 50%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
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
