import { styled } from "styled-components";

export const SearchBoxContainer = styled.div`
    width: 800px;
    height: 100px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    img {
        position: absolute;
        right: 40px;
    }
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 90%;
    height: 60%;
    border-radius: 40px;
    background-color: inherit;
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: rgba(255, 255, 255, 0.4);
    font-size: 25px;
    padding: 0 30px;
    &::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }
`;
