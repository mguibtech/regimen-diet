import styled, {css} from "styled-components/native";

export type CollorPanelTypeStyleProps = 'PRIMARY' | 'SECONDARY';
type Props = {
    type: CollorPanelTypeStyleProps,
    default: boolean
}


export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 16px;
    border-radius: 8px;
    background: ${({ theme }) =>  theme.COLORS.GRAY_6};
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
`;
