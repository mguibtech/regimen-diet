import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SafeAreaView } from "react-native-safe-area-context";

export type TypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: TypeStyleProps
}


export const Container = styled(SafeAreaView) <Props>`
  flex: 1;

  background: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start; 
    gap: 82px;
    padding: 0 24px;
    
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_2
}))`
    
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    line-height: 23.4px;
`;

export const Body = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    
    padding: 40px 24px;
    margin-top: 24px;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: 20px;
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    line-height: 26px;
`;

export const TextDescription = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    line-height: 20.6px;
    margin-top: 8px;
`;

export const LabelData = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    line-height: 18.2px;
    margin-top: 24px
`;

export const Status = styled.View<Props>`
    width: 8px;
    height: 8px;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK};

    flex: none;
    border-radius: 50px;
`;