import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
    flex: 1;
    /* padding-top: 24px; */
    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
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
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    line-height: 18.2px;
`;

export const Input = styled.TextInput.attrs({
    multiline: true,
})`
    padding: 10px 16px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    margin-top: 3px;
    margin-bottom: 24px;
`;

export const MomentData = styled.View`
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    gap: 8px;
`;

export const DateIntem = styled.TouchableOpacity`
    padding: 10px 16px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    margin-top: 3px;
    margin-bottom: 24px;
`;

export const HourIntem = styled.TouchableOpacity`
    padding: 10px 16px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    margin-top: 3px;
    margin-bottom: 24px;
`;

export const QuestionDiet = styled.View`
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    gap: 8px;
    flex: 1;
`;