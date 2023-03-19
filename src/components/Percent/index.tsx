import {
    Container,
    PercenteTypeStyleProps,
    InfoPercenter,
    TitlePercenter,
    Icon
} from "./style";
import { TouchableOpacityProps } from 'react-native';
import {Feather} from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    icon: keyof typeof Feather.glyphMap;
    type? : PercenteTypeStyleProps;
  }


export function Percent({ type = 'PRIMARY', icon, ...rest  }: Props) {
    return (
        <Container type={type}>
            <Icon
                name={icon}
                type={type} />
            <TitlePercenter>90,86%</TitlePercenter>
            <InfoPercenter>das refeições dento da dieta</InfoPercenter>            
        </Container>
    )
}


