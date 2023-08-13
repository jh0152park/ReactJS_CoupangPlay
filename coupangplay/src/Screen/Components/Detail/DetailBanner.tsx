import { useQuery } from "react-query";
import { IDetail, IImages } from "../../../GlobalFeatures";
import { createImagePath, getMovieDetail, getMovieImages } from "../../../API";
import {
    Button,
    ButtonContainer,
    Buttons,
    Description,
    DisplayBox,
    Logo,
    LogoImage,
    LogoTitle,
    Play,
    Share,
    Star,
    Summary,
    Text,
} from "../../Styled/Detail/DetailBannerStyled";
import { convertMinutesToHoursAndMinutes } from "../../../ProjectCommon";

function DetailBanner({ id }: { id: string | number }) {
    let backdrop_path = "";
    let poster_path = "";
    let genre = "";
    let genres = "";
    let homepage = "";
    let overview = "";
    let release_date = "";
    let runtime = "";
    let title = "";
    let vote_average = 0;
    let vote_count = "";
    let productions = "";
    let logo_path = "";

    const detail = useQuery<IDetail>(["movie_detail_page", id], () =>
        getMovieDetail(id)
    );

    const image = useQuery<IImages>(["movie_detail_image", id], () =>
        getMovieImages(id)
    );

    function getGenres(): string {
        if (!detail.isLoading && detail.data) {
            let gen = "";
            for (var i of detail.data.genres) {
                gen += i.name + ", ";
            }
            return gen.slice(0, gen.length - 2);
        }
        return "n/a";
    }

    function getProduction(): string {
        if (!detail.isLoading && detail.data) {
            let pro = "";
            for (var i of detail.data.production_companies) {
                pro += i.name + ", ";
            }
            return pro.slice(0, pro.length - 2);
        }
        return "n/a";
    }

    function updateDetail() {
        if (!detail.isLoading && detail.data) {
            backdrop_path = detail.data.backdrop_path;
            poster_path = detail.data.poster_path;
            genre = detail.data.genres[0].name;
            genres = getGenres();
            homepage = detail.data.homepage;
            overview = detail.data.overview;
            release_date = detail.data.release_date.split("-")[0];
            runtime = convertMinutesToHoursAndMinutes(detail.data.runtime);
            title = detail.data.title;
            vote_average = parseFloat(detail.data.vote_average.toFixed(1));
            vote_count = detail.data.vote_count.toLocaleString();
            productions = getProduction();
        }
    }

    function computeLogoIamgePath() {
        if (!image.isLoading && image.data) {
            for (var i of image.data.logos) {
                if (i.iso_639_1?.toLowerCase() === "en") {
                    logo_path = i.file_path;
                    return;
                }
            }
        }
    }

    console.log(image.data);
    updateDetail();
    computeLogoIamgePath();
    console.log("logo_path: " + logo_path);
    return (
        <>
            {detail.isLoading || image.isLoading ? null : (
                <DisplayBox
                    BGPhoto={createImagePath(
                        backdrop_path ? backdrop_path : poster_path
                    )}
                >
                    <Description>
                        <Logo>
                            {logo_path ? (
                                <LogoImage
                                    src={createImagePath(logo_path)}
                                ></LogoImage>
                            ) : (
                                <LogoTitle>{title}</LogoTitle>
                            )}
                        </Logo>

                        <Summary>
                            <Star>★</Star>
                            &nbsp;{vote_average} ({vote_count}) ◦ {runtime} ◦
                            {genre} ◦ {release_date}
                        </Summary>

                        <Buttons>
                            <Play>► 재생하기</Play>
                            <ButtonContainer>
                                <Button></Button>
                                <Text>찜한 콘텐츠</Text>
                            </ButtonContainer>
                            <ButtonContainer></ButtonContainer>
                        </Buttons>
                    </Description>
                </DisplayBox>
            )}
        </>
    );
}

export default DetailBanner;
