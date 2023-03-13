import { 
    Container, 
    PercenteTypeStyleProps,
    IconInformation,
    InfoPercenter,
    TitlePercenter
} from "./style";


type PercenterProps = {
    type?: PercenteTypeStyleProps;
}



export function Percent({type = 'PRIMARY'}: PercenterProps){
    return(
        <Container type={type}>
            <TitlePercenter>90,86%</TitlePercenter>
            <InfoPercenter>das refeições dento da dieta</InfoPercenter>
            <IconInformation type={type}/>
        </Container>
    )
}


