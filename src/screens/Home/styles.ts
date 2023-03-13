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

