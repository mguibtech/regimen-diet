import styled from "styled-components/native";

export const Container = styled.Modal`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px 21px 24px 24px;
  margin: 0 24px;
`;

export const TextDescription = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_2};
    text-align: center;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    line-height: 23.4px;
    margin: 0 5px 32px 5px;
`;
