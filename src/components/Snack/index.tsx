import { TouchableOpacityProps } from "react-native";
import { Container, TitleSnack, SnackIconTypeStyleProps, HourSnack, Separator } from "./styles";


type Props =  TouchableOpacityProps & {
    title: string;
    hour: string;
    type?: SnackIconTypeStyleProps;
}

export function Snack({title, hour, type= 'PRIMARY', ...rest} : Props){
    return(
        <Container {...rest}>
            <HourSnack>{hour}</HourSnack>
            <Separator/>
            <TitleSnack >{title}</TitleSnack>

        </Container>
    )
}