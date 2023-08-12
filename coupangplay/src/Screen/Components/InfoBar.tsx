import { AnimatePresence } from "framer-motion";
import { Container, InfoBarVariant } from "../Styled/InfoBarStyled";

function InfoBar() {
    return (
        <>
            <Container variants={InfoBarVariant}></Container>
        </>
    );
}

export default InfoBar;
