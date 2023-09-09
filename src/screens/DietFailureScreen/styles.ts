import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`;

export const TextTitle = styled.Text`
    color: ${({theme}) => theme.COLORS.RED_DARK};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;

`;

export const TextDescription = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;

`;

export const TextDescriptionBold = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;

`;