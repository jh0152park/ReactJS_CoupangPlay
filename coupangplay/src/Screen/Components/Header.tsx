import { Link } from "react-router-dom";
import {
    LOGO_URL,
    LeftNavigation,
    RightNavigation,
    Wrapper,
    Logo,
    Menu,
    Menus,
    SEARCH_URL,
    SearchLogo,
    Profile,
    ProfileBox,
    ArrowDown,
    ARROW_DOWN_URL,
    ProfileMenuBox,
    ProfileMenu,
} from "../Styled/HeaderStyled";

function Header() {
    const menus = [
        "TV",
        "영화",
        "스포츠",
        "스토어",
        "키즈",
        "뉴스",
        "찜한 콘텐츠",
    ];

    const profileMenus = [
        "프로필 관리",
        "구매내역",
        "할인쿠폰",
        "리뷰 관리",
        "의견 보내기",
        "로그아웃",
    ];

    return (
        <Wrapper>
            <LeftNavigation>
                <Link to="/">
                    <Logo src={LOGO_URL}></Logo>
                </Link>

                <Menus>
                    {menus.map((menu) => (
                        <Link to={`/${menu}`}>
                            <Menu>{menu}</Menu>
                        </Link>
                    ))}
                </Menus>
            </LeftNavigation>

            <RightNavigation>
                <Link to="/">
                    <SearchLogo src={SEARCH_URL} />
                </Link>
                <ProfileBox>
                    <Profile>P</Profile>
                    <ArrowDown src={ARROW_DOWN_URL} />
                    <ProfileMenuBox>
                        {profileMenus.map((menu) => (
                            <ProfileMenu>{menu}</ProfileMenu>
                        ))}
                    </ProfileMenuBox>
                </ProfileBox>
            </RightNavigation>
        </Wrapper>
    );
}

export default Header;
