import {
    LOGO_URL,
    LeftNavigation,
    RightNavigation,
    Wrapper,
    Logo,
    Menu,
    Menus,
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

    return (
        <Wrapper>
            <LeftNavigation>
                <Logo src={LOGO_URL}></Logo>
                <Menus>
                    {menus.map((menu) => (
                        <Menu>{menu}</Menu>
                    ))}
                </Menus>
            </LeftNavigation>
            <RightNavigation></RightNavigation>
        </Wrapper>
    );
}

export default Header;
