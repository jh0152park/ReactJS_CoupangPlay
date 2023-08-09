import { Category, Container } from "../Styled/CategoryBarStyled";
import { CATEGORIES } from "../Types/CategoryBarTypes";

function CategoryBar() {
    return (
        <Container>
            {CATEGORIES.map((category) => (
                <Category length={category.length * 15}>{category}</Category>
                // <Category></Category>
            ))}
        </Container>
    );
}

export default CategoryBar;
