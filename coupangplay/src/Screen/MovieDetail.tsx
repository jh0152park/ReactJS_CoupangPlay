import { Wrapper } from "./Styled/Detail/DetailBannerStyled";

import DetailBanner from "./Components/Detail/DetailBanner";

function MovieDetail({ id }: { id: string | number }) {
    return (
        <>
            <Wrapper>
                <DetailBanner id={id}></DetailBanner>
            </Wrapper>
            )
        </>
    );
}

export default MovieDetail;
