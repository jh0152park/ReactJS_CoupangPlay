import { useState } from "react";
import { LEFT_ARROW_URL, RIGHT_ARROW_URL } from "../../GlobalFeatures";
import {
    CategoriesContainer,
    Category,
    Container,
    LeftArrow,
    RightArrow,
} from "../Styled/CategoryBarStyled";
import { CATEGORIES } from "../Types/CategoryBarTypes";
import { AnimatePresence } from "framer-motion";
import { SlideVariants } from "../../ProjectCommon";

function CategoryBar() {
    const [categoryIndex, setCategoryIndex] = useState<number>(0);
    const [direction, setDirection] = useState<number>(1);
    const categories = [
        CATEGORIES.slice(0, 10),
        CATEGORIES.slice(10, 23),
        CATEGORIES.slice(23, 36),
    ];

    function updateIndex() {
        setCategoryIndex((prev) => (prev ? 0 : 1));
    }

    function onLeftArrowClick() {
        // updateIndex();
        setCategoryIndex((prev) => (prev === 0 ? 2 : prev - 1));
        setDirection(-1);
    }

    function onRightArrowClick() {
        // updateIndex();
        setCategoryIndex((prev) => (prev === 2 ? 0 : prev + 1));
        setDirection(1);
    }

    return (
        <>
            <Container>
                <LeftArrow
                    onClick={onLeftArrowClick}
                    src={LEFT_ARROW_URL}
                ></LeftArrow>

                <AnimatePresence initial={false} custom={direction}>
                    <CategoriesContainer
                        key={categoryIndex}
                        variants={SlideVariants}
                        initial="start"
                        animate="end"
                        exit="exit"
                        custom={direction}
                        transition={{
                            type: "tween",
                            duration: 1,
                        }}
                    >
                        {categories[categoryIndex].map((category) => (
                            <Category length={category.length * 20}>
                                {category}
                            </Category>
                        ))}
                    </CategoriesContainer>
                </AnimatePresence>

                <RightArrow
                    onClick={onRightArrowClick}
                    src={RIGHT_ARROW_URL}
                ></RightArrow>
            </Container>
        </>
    );
}

export default CategoryBar;
