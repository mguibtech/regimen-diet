import styled, {css} from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_7};
    padding: 24px;
`;

export const HeaderHome = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    /* width: 82px;
    height: 67px; */
`;

export const User = styled.Image`
    /* width: 82px;
    height: 67px; */
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1}
    `}
    font-weight:400;
    margin-top: 40px;
    margin-bottom: 8px;
    /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
`;

export const TitleSection = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1}
    `}
    font-weight:700;
    margin-top: 40px;
    margin-bottom: 8px;

`;

