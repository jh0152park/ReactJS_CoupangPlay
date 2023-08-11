import { useHistory, useLocation, useParams } from "react-router-dom";
import {
    MovieDetail,
    Overlay,
    OverlayVariants,
} from "../Styled/BannerMovieDetailStyled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { BannerClickMovieState, BannerDetailState } from "../../GlobalFeatures";
import { AnimatePresence } from "framer-motion";

function Detail({ y }: { y: number }) {
    const History = useHistory();
    const setShowDetail = useSetRecoilState(BannerDetailState);
    const clickedMovieId = useRecoilValue(BannerClickMovieState);
    const currntPath = useLocation().pathname.slice(1);
    const currentPathId = currntPath.split("main")[1];
    const isRealClicked = clickedMovieId === +currentPathId;

    function handleClickOutside() {
        setShowDetail(false);
        History.goBack();
    }

    console.log(currntPath);
    return (
        <>
            {isRealClicked ? (
                <AnimatePresence>
                    <Overlay
                        layoutId={currntPath}
                        onClick={handleClickOutside}
                        variants={OverlayVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            type: "tween",
                            duration: 0.5,
                        }}
                    >
                        <MovieDetail style={{ top: y + 200 }}></MovieDetail>
                    </Overlay>
                </AnimatePresence>
            ) : null}
        </>
    );
}

export default Detail;
