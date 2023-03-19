import { Container, Title, Icon, ButtonIconTypeStyleProps } from "./styles";
import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonIconTypeStyleProps;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export function Button({ icon, title, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container type={type} {...rest}>
            <Icon
                name={icon}
                type={type} />
            <Title type={type}>{title}</Title>
        </Container>
    )
}