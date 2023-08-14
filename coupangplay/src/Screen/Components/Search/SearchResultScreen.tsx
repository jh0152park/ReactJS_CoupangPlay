import { useRecoilValue } from "recoil";
import {
    MessageBox,
    MessageBoxContainer,
} from "../../Styled/Search/SearchResultStyled";
import { SearchKeywordState } from "../../../ProjectCommon";
import { useQuery } from "react-query";
import { SearchMovie, SearchTV } from "../../../API";
import Slider from "../Slider";
import { IMovieSearchResult, ITVSearchResult } from "../../../GlobalFeatures";

function SearchResultScreen() {
    const searchKeyword = useRecoilValue(SearchKeywordState);

    const MovieSearch = useQuery(["msearch1", searchKeyword], () =>
        SearchMovie(searchKeyword, 1)
    );
    const MovieSearch2 = useQuery(["msearch2", searchKeyword], () =>
        SearchMovie(searchKeyword, 2)
    );
    const TVSearch = useQuery(["tsearch1", searchKeyword], () =>
        SearchTV(searchKeyword, 1)
    );
    const TVSearch2 = useQuery(["tsearch2", searchKeyword], () =>
        SearchTV(searchKeyword, 2)
    );

    return (
        <>
            {MovieSearch.isLoading ||
            MovieSearch2.isLoading ||
            TVSearch.isLoading ||
            TVSearch2.isLoading ? (
                <MessageBox>Searching...</MessageBox>
            ) : (
                <>
                    <MessageBox>
                        {`Search results about "${searchKeyword}"`}
                    </MessageBox>

                    {MovieSearch.isLoading && MovieSearch ? null : (
                        <Slider
                            title="관련 영화"
                            results={MovieSearch.data?.results}
                            type="movie"
                        ></Slider>
                    )}
                    {MovieSearch2.isLoading && MovieSearch2 ? null : (
                        <Slider
                            title="관련 영화"
                            results={MovieSearch2.data?.results}
                            type="movie"
                        ></Slider>
                    )}
                    {TVSearch.isLoading && TVSearch ? null : (
                        <Slider
                            title="관련 TV Show"
                            results={TVSearch.data?.results}
                            type="tv"
                        ></Slider>
                    )}
                    {TVSearch2.isLoading && TVSearch2 ? null : (
                        <Slider
                            title="관련 TV Show"
                            results={TVSearch2.data?.results}
                            type="tv"
                        ></Slider>
                    )}
                </>
            )}
        </>
    );
}

export default SearchResultScreen;
