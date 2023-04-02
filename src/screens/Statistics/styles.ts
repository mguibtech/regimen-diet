import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

export type CollorHeaderTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: CollorHeaderTypeStyleProps
}

export const Container = styled.View<Props>`
    flex: 1;
    /* padding: 24px; */
    background: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const HeaderStatistics = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 24px;
    align-items: flex-start;
    justify-content: space-between;
    

`;

export const Title = styled.Text`

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1}
    `}
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `}
    font-weight: 400;
    margin-bottom:12px
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  padding-top: 80px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
`;

export const GeneralStatistics = styled.View`
    flex: 1;
    padding: 24px;
    background: ${({theme}) => theme.COLORS.GRAY_7};
    align-items: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`

export const TitleGeneralStatistics = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `}
    font-weight: 700;    
`;