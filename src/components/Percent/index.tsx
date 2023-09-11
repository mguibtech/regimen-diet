import {
    Container,
    PercenteTypeStyleProps,
    InfoPercenter,
    TitlePercenter,
    Icon
} from "./style";
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    icon: keyof typeof Feather.glyphMap;
    type?: PercenteTypeStyleProps;
    action: () => void;
}


export function Percent({ type = 'PRIMARY', icon, action, ...rest }: Props) {
    return (
        <Container type={type}>
            <TouchableOpacity onPress={action}>
                <Icon
                    name={icon}
                    type={type} />
            </TouchableOpacity>

            <TitlePercenter>90,86%</TitlePercenter>
            <InfoPercenter>das refeições dento da dieta</InfoPercenter>
        </Container>
    )
}


