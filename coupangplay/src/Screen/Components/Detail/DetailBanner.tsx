import { useQuery } from "react-query";
import { IDetail } from "../../../GlobalFeatures";
import { createImagePath, getMovieDetail } from "../../../API";
import { DisplayBox } from "../../Styled/Detail/DetailBannerStyled";
import { convertMinutesToHoursAndMinutes } from "../../../ProjectCommon";

function DetailBanner({ id }: { id: string | number }) {
    let backdrop_path = "";
    let poster_path = "";
    let genres = "";
    let homepage = "";
    let overview = "";
    let release_date = "";
    let runtime = "";
    let title = "";
    let vote_average = 0;
    let vote_count = 0;

    const detail = useQuery<IDetail>(["movie_detail_page", id], () =>
        getMovieDetail(id)
    );

    function getGenres(): string {
        if (!detail.isLoading && detail.data) {
            let gen = "";
            for (var i of detail.data.genres) {
                gen += i.name + ", ";
            }
            return gen.slice(0, gen.length - 2);
        }
        return " ";
    }

    function getProduction() {
        if (!detail.isLoading && detail.data) {
            let pro = "";
            for (var i of detail.data.production_companies) {
                pro += i.name + ", ";
            }
            return pro.slice(0, pro.length - 2);
        }
    }

    function updateDetail() {
        if (!detail.isLoading && detail.data) {
            backdrop_path = detail.data.backdrop_path;
            poster_path = detail.data.poster_path;
            genres = getGenres();
            homepage = detail.data.homepage;
            overview = detail.data.overview;
            release_date = detail.data.release_date.split("-")[0];
            runtime = convertMinutesToHoursAndMinutes(detail.data.runtime);
            title = detail.data.title;
            vote_average = parseFloat(detail.data.vote_average.toFixed(1));
            vote_count = detail.data.vote_count;
        }
    }

    //console.log(detail.data);
    updateDetail();
    return (
        <>
            {detail.isLoading ? null : (
                <DisplayBox
                    BGPhoto={createImagePath(
                        backdrop_path ? backdrop_path : poster_path
                    )}
                ></DisplayBox>
            )}
        </>
    );
}

export default DetailBanner;
