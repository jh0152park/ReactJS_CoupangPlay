import { useHistory } from "react-router-dom";
import { MovieDetail, Overlay } from "../Styled/BannerMovieDetailStyled";
import { useSetRecoilState } from "recoil";
import { BannerDetailState } from "../../GlobalFeatures";

function Detail({ y }: { y: number }) {
    const History = useHistory();
    const setShowDetail = useSetRecoilState(BannerDetailState);

    function handleClickOutside() {
        setShowDetail(false);
        History.goBack();
    }

    return (
        <Overlay onClick={handleClickOutside}>
            <MovieDetail style={{ top: y + 200 }}></MovieDetail>
        </Overlay>
    );
}

export default Detail;
