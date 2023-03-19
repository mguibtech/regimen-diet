import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons' 

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props ={
    type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    flex-direction: row;
    gap: 10px;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({theme, type}) => type === 'PRIMARY' ?
        theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};
    
    border-radius: 6px;
    justify-content: center;
    align-items: center;

    border: ${({theme, type}) => type === 'SECONDARY' ?
        theme.COLORS.GRAY_1 : theme.COLORS.GRAY_7};
`;

export const Title = styled.Text<Props>`
    ${({theme, type}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${type === "PRIMARY" ? theme.COLORS.WHITE :
            theme.COLORS.GRAY_1};
    `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GRAY_7 : theme.COLORS.GRAY_2
}))``;