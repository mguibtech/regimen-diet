import styled,  {css} from "styled-components/native";

export type CollorMealsTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: CollorMealsTypeStyleProps
}


export const Container = styled.View<Props>`
    width: 48%;
    height: 48%;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-radius: 8px;
    background: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    
`


export const ValueTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1}
    `}

    font-weight: 700;
    margin-bottom: 8px
`; 

export const ValueSubtitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1}
    `}
    text-align: center
`;