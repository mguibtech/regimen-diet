import { Container, CollorMealsTypeStyleProps, ValueSubtitle,ValueTitle } from "./styles";

type Props = {
    type? : CollorMealsTypeStyleProps;
    defalut?: boolean;
    value: string;
    message: string;
  }

export function Meals({ value, message, type = 'PRIMARY'} : Props){
    return(
        <Container type={type}>
            <ValueTitle>{value}</ValueTitle>
            <ValueSubtitle>{message}</ValueSubtitle>
        </Container>
    )
}