import { Container, CollorPanelTypeStyleProps, ValueTitle, ValueSubtitle } from "./styles";

type Props = {
    type? : CollorPanelTypeStyleProps;
    defalut?: boolean;
    value: string;
    message: string;
  }

export function Panel({ value, message} : Props){
    return(
        <Container>
            <ValueTitle>{value}</ValueTitle>
            <ValueSubtitle>{message}</ValueSubtitle>
        </Container>
    )
}