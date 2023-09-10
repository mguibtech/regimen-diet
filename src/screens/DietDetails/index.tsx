
import { Button } from "@components/Button";
import {
    Container,
    Header,
    Icon,
    Title,
    TypeStyleProps,
    Body,
    Label,
    TextDescription,
    LabelData,
    Status
} from "./styles";

import { View, Text } from 'react-native'


type Props = {
    type: TypeStyleProps
}

export function DietDetails({ type = 'SECONDARY' }: Props) {
    return (
        <Container type={type}>
            <Header>
                <Icon name='arrow-left' />
                <Title>Refeição</Title>
            </Header>

            <Body>
                <Label>
                    X-tudo
                </Label>

                <TextDescription>
                    Xis completo da lancheria do bairro
                </TextDescription>

                <LabelData>
                    Data e hora
                </LabelData>
                <TextDescription>
                    12/08/2022 às 20:00
                </TextDescription>

                <View style={{ flex: 1 , marginTop: 24}}>
                    <View style={{
                        paddingHorizontal: 16,
                        paddingVertical: 6,
                        backgroundColor: '#EFF0F0',
                        width: '40%',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: "row",
                        gap: 8
                    }}>
                        <Status type={type}/>
                        <Text>fora da dieta</Text>
                    </View>
                </View>

                <View style={{ gap: 9 }}>
                    <Button
                        title="Eidtar refeição"
                        icon="mode-edit"
                    />

                    <Button
                        title="Excluir refeição"
                        icon="delete"
                        type="SECONDARY"
                    />
                </View>
            </Body>
        </Container>
    )
}