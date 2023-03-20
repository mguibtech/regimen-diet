import { TouchableOpacityProps } from "react-native";
import { Container,
    TitleSnack,
    SnackIconTypeStyleProps, 
    HourSnack, 
    Separator,
    Status
} from "./styles";


type Props =  TouchableOpacityProps & {
    title: string;
    hour: string;
    type?: SnackIconTypeStyleProps;
    status: boolean;
}

export function Snack({title, hour, type= 'PRIMARY', status, ...rest} : Props){
    return(
        <Container {...rest}>
            <HourSnack>{hour}</HourSnack>
            <Separator/>
            <TitleSnack >{title}</TitleSnack>
            <Status type={status === true ? 'PRIMARY' : "SECONDARY"}>{status}</Status>
        </Container>
    )
}