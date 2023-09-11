import { Panel } from '@components/Panel';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacityProps, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

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
import { Meals } from '@components/Meals';

type Props = TouchableOpacityProps & {
    // icon: keyof typeof MaterialCommunityIcons.glyphMap;
    type?: CollorHeaderTypeStyleProps;
}

export function Statistics({ type = 'PRIMARY' }: Props) {
    const navigation = useNavigation()

    const route = useRoute()

    function hanleGoBackHome() {
        navigation.navigate('home')
    }

    


    return (
        <Container type={type}>
            <HeaderStatistics >
                <TouchableOpacity onPress={hanleGoBackHome}>
                    <Icon name='arrow-left' type={type} />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 2 }}>
                    <Title>90,86%</Title>
                    <SubTitle>das refeições dentro da dieta</SubTitle>
                </View>
            </HeaderStatistics>

            <GeneralStatistics>
                <TitleGeneralStatistics>Estatíticas gerais</TitleGeneralStatistics>
                <Panel
                    value='22'
                    message='melhor sequência de pratos dentro da dieta'
                />

                <Panel
                    value='109'
                    message='refeições registradas'
                />
                <View style={{ width: '100%', alignItems: 'flex-start', paddingTop: 12, justifyContent: 'space-between', flexDirection: 'row', gap: 12 }}>
                    <Meals
                        value='99'
                        message='refeições dentro da dieta'
                    />

                    <Meals
                        value='10'
                        message='refeições fora da dieta'
                        type='SECONDARY'
                    />
                </View>
            </GeneralStatistics>
        </Container>
    )
}