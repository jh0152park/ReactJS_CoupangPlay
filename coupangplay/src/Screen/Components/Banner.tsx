import { createImagePath } from "../../API";
import { Wrapper, IData } from "../Styled/BannerStyled";

function Banner({ results }: IData) {
    console.log(results[0]);
    const backgroundImagePath = createImagePath(results[0].backdrop_path);
    console.log(backgroundImagePath);

    return <Wrapper BGPhoto={backgroundImagePath}></Wrapper>;
}

export default Banner;
