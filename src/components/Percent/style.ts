import styled, {css} from "styled-components/native";
import {ArrowUpRight} from 'phosphor-react-native'
import { MaterialIcons } from '@expo/vector-icons'

export type PercenteTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: PercenteTypeStyleProps
}

export const Container = styled.View<Props>`
    width: 100%;
    padding: 20px 16px;
    margin-top: 33px;
    position: relative;

    /* justify-content: center; */
    /* align-items: center; */
    gap: 2px;

    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
`;

export const IconInformation = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  }))`
    position: absolute;
    margin-top: 8px;
    display: flex;
    margin-left: 330px;
    align-items: flex-end;
`;