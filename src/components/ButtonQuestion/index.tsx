import { Text } from "react-native";
import { Container, ButtonIconTypeStyleProps, Status } from "./styles";
import { TouchableOpacityProps } from 'react-native'


type Props = TouchableOpacityProps & {
    title: string;
    type: ButtonIconTypeStyleProps;
    isActive: boolean;
}

export function ButtonQuestion({ title, type, isActive, ...rest } : Props){
    console.log(isActive)
    
    return(
        <Container
            isActive={isActive}
            type={type}
            {...rest}
        >
            <Status type={type}/>
            <Text>{title}</Text>
        </Container>
    )
}