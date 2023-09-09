import { Button } from "@components/Button";
import { Container, TextDescription, TextDescriptionBold, TextTitle } from "./styles";
import { Image, Text, View } from "react-native";

import ImgSuccess from '@assets/succesImg.png'

export function DietSuccessScreen() {
    return (
        <Container>
            <TextTitle>Continue assim!</TextTitle>
            <TextDescription>Você continua <TextDescriptionBold>dentro da dieta</TextDescriptionBold>. Muito bem!</TextDescription>

            <Image
                source={ImgSuccess}
                style={{ marginBottom: 32, marginTop: 40 }}
            />

            <View style={{width: '60%'}}>
                <Button
                    title="Ir a página inicial"
                />
            </View>

        </Container>
    )
}