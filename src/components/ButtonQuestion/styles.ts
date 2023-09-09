import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonIconTypeStyleProps;
}

type PropsButon = TouchableOpacity & {
    isActive: boolean;
    type?: ButtonIconTypeStyleProps;
}


export const Container = styled(TouchableOpacity) <PropsButon>`
    width: 48%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    min-height: 50px;
    max-height: 50px;
    border-radius: 6px;

    background-color: ${({ theme, isActive, type }) => type === 'PRIMARY' && isActive ?
        theme.COLORS.GREEN_LIGHT : type === 'SECONDARY' && isActive ? theme.COLORS.RED_LIGHT :
            theme.COLORS.GRAY_6};
    
`;

export const Status = styled.View<Props>`
    width: 8px;
    height: 8px;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK};

    flex: none;
    border-radius: 50px;
`;