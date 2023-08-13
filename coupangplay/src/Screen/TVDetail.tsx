import { Wrapper } from "./Styled/Detail/DetailBannerStyled";

import DetailBanner from "./Components/Detail/DetailBanner";
import DetailTVBanner from "./Components/Detail/DetailTVBanner";

function TVDetail({ id }: { id: string | number }) {
    return (
        <>
            <Wrapper>
                <DetailTVBanner id={id}></DetailTVBanner>
            </Wrapper>
        </>
    );
}

export default TVDetail;
