import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacityProps, View } from 'react-native';

import {
    Container,
    HeaderStatistics,
    Title,
    SubTitle,
    BackButton,
    Icon,
    CollorHeaderTypeStyleProps,
    GeneralStatistics,
    TitleGeneralStatistics
} from "./styles";

type Props = TouchableOpacityProps & {
    // icon: keyof typeof MaterialCommunityIcons.glyphMap;
    type?: CollorHeaderTypeStyleProps;
}

export function Statistics({ type = 'PRIMARY' }: Props) {
    return (
        <Container type={type}>
            <HeaderStatistics >
                <Icon name='arrow-left' type={type} />
                <View style={{flex:1,justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Title>90,86%</Title>
                    <SubTitle>das refeições dentro da dieta</SubTitle>
                </View>
            </HeaderStatistics>

            <GeneralStatistics>
                <TitleGeneralStatistics>Estatíticas gerais</TitleGeneralStatistics>
                
            </GeneralStatistics>
        </Container>
    )
}