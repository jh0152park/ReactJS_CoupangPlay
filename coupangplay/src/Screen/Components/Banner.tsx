import { AnimatePresence } from "framer-motion";
import { createImagePath } from "../../API";
import {
    Wrapper,
    IData,
    DisplayBox,
    MainBannerImageVariants,
    LeftArrow,
    LEFT_ARROW_URL,
    RightArrow,
    RIGHT_ARROW_URL,
} from "../Styled/BannerStyled";
import { useState } from "react";

function Banner({ results }: IData) {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(1);

    function onButtonClick() {
        const maxLength = results.length;

        if (endIndex === maxLength) {
            setStartIndex(0);
            setEndIndex(1);
        } else {
            setStartIndex((prev) => prev + 1);
            setEndIndex((prev) => prev + 1);
        }
    }

    function onLeftArrowClick() {
        const maxLength = results.length;

        if (startIndex === 0) {
            setStartIndex(maxLength - 1);
            setEndIndex(maxLength);
        } else {
            setStartIndex((prev) => prev - 1);
            setEndIndex((prev) => prev - 1);
        }
    }

    return (
        <Wrapper>
            <AnimatePresence initial={false}>
                <LeftArrow src={LEFT_ARROW_URL}></LeftArrow>
                {results.slice(startIndex, endIndex).map((result) => (
                    <DisplayBox
                        key={result.id}
                        variants={MainBannerImageVariants}
                        initial="start"
                        animate="end"
                        exit="exit"
                        BGPhoto={createImagePath(
                            result.backdrop_path
                                ? result.backdrop_path
                                : result.poster_path
                        )}
                        transition={{
                            type: "tween",
                            duration: 1,
                        }}
                    ></DisplayBox>
                ))}
                <RightArrow
                    onClick={onButtonClick}
                    src={RIGHT_ARROW_URL}
                ></RightArrow>
            </AnimatePresence>
            <button
                style={{ position: "absolute", top: "700px" }}
                onClick={onButtonClick}
            >
                Click
            </button>
        </Wrapper>
    );
}

export default Banner;
