import { AnimatePresence } from "framer-motion";
import { createImagePath } from "../../API";
import {
    Wrapper,
    IData,
    DisplayBox,
    MainBannerImageVariants,
} from "../Styled/BannerStyled";
import { useState } from "react";

function Banner({ results }: IData) {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(1);

    function onButtonClick() {
        const maxLength = results.length;

        if (endIndex === maxLength) {
            setEndIndex(1);
            setStartIndex(0);
        } else {
            setEndIndex((prev) => prev + 1);
            setStartIndex((prev) => prev + 1);
        }
    }

    return (
        <Wrapper>
            <AnimatePresence initial={false}>
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
