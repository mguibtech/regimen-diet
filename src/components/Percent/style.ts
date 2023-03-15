import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'

export type PercenteTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: PercenteTypeStyleProps
}

export const Container = styled.View<Props>`
    width: 100%;
    padding: 8px 8px;
    margin-top: 33px;
    align-items: flex-end;
    /* position: relative; */

    /* gap: 2px; */

    background: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 8);
    border-radius: 8px;
`;

export const TitlePercenter = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1}
    `}
    font-weight: 700;
    text-align:center;
    align-self: stretch;
    margin-top: -10px;
`;

export const InfoPercenter = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1}
    `}
    font-weight: 400;
    text-align:center;
    align-self: stretch;
    margin-bottom: 12px
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``;