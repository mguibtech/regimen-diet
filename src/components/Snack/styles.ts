import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export type SnackIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props ={
    type: SnackIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
    width: 100%;
    /* display: inline-flex; */
    /* flex:1; */
    height: 49px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;

    min-height: 49px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 14px 16px 14px 12px;
    gap: 12px;

    align-self: stretch;
    

    border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
    border-radius: 6px;
`;  

export const TitleSnack = styled.Text.attrs({
    numberOfLines: 1,
    ellipsizeMode: 'tail',
})`
    ${({theme}) => css `
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2}
    `}
    font-weight: 400;
    flex: 1; 
`

export const HourSnack = styled.Text`
    ${({theme}) => css `
        font-size: ${theme.FONT_SIZE.XS}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_2}
    `}
    font-weight: 400;
`
export const Separator = styled.View`
    width: 0px;
    height: 14px;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_4};
`;