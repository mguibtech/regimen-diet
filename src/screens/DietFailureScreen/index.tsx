import { Image } from "react-native";
import { Container, TextDescription, TextDescriptionBold, TextTitle } from "./styles";
import { View } from "react-native";
import { Button } from "@components/Button";

import { useNavigation } from '@react-navigation/native'

import ImgSuccess from '@assets/failureImg.png'


export function DietFailureScreen(){
    const navigation = useNavigation()

    function handleGoHome() {
        navigation.navigate('home')
    }
    
    return (
        <Container>
            <TextTitle>Que pena!</TextTitle>
            <TextDescription>Você <TextDescriptionBold>saiu da dieta</TextDescriptionBold> dessa vez, mas continue se esforçando e não desista!</TextDescription>

            <Image
                source={ImgSuccess}
                style={{ marginBottom: 32, marginTop: 40 }}
            />

            <View style={{width: '60%'}}>
                <Button
                    title="Ir a página inicial"
                    onPress={handleGoHome}
                />
            </View>

        </Container>
    )
}