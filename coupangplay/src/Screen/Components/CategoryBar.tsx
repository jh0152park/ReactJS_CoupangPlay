import { useState } from "react";
import { LEFT_ARROW_URL, RIGHT_ARROW_URL } from "../../GlobalFeatures";
import {
    CategoriesContainer,
    Category,
    Container,
    GenresCategoriesVariants,
    LeftArrow,
    RightArrow,
} from "../Styled/CategoryBarStyled";
import { CATEGORIES } from "../Types/CategoryBarTypes";
import { AnimatePresence } from "framer-motion";

function CategoryBar() {
    const [categoryIndex, setCategoryIndex] = useState<number>(0);
    const [direction, setDirection] = useState<number>(1);
    const [moving, setMoving] = useState<boolean>(false);
    const categories = [CATEGORIES.slice(0, 10), CATEGORIES.slice(10, 23)];

    function updateIndex() {
        setCategoryIndex((prev) => (prev ? 0 : 1));
    }

    function onLeftArrowClick() {
        updateIndex();
        setDirection(-1);
        setMoving(true);
        console.log("left arrow clicked");
    }

    function onRightArrowClick() {
        updateIndex();
        setDirection(1);

        console.log("right arrow clicked");
    }

    return (
        <>
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <Container>
                    <LeftArrow
                        onClick={onLeftArrowClick}
                        src={LEFT_ARROW_URL}
                    ></LeftArrow>

                    <CategoriesContainer>
                        {categories[categoryIndex].map((category) => (
                            <Category
                                key={category}
                                layoutId={category}
                                length={category.length * 20}
                                variants={GenresCategoriesVariants}
                                initial="start"
                                animate="end"
                                exit="exit"
                                custom={direction}
                                transition={{
                                    type: "tween",
                                    duration: 1,
                                }}
                            >
                                {category}
                            </Category>
                        ))}
                    </CategoriesContainer>

                    <RightArrow
                        onClick={onRightArrowClick}
                        src={RIGHT_ARROW_URL}
                    ></RightArrow>
                </Container>
            </AnimatePresence>
        </>
    );
}

export default CategoryBar;
