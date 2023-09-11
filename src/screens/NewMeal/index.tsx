import { useState } from 'react'
import { Button } from "@components/Button";
import {
    Container,
    Icon,
    Title,
    Header,
    Body,
    Label,
    Input,
    MomentData,
    DateIntem,
    HourIntem,
    QuestionDiet,

} from "./styles";
import { TextInput, View, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from 'react-native';
import { ButtonQuestion } from '@components/ButtonQuestion';

import { useNavigation } from '@react-navigation/native'


export function NewMeal() {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('');
    const [show, setShow] = useState(false);
    const [actviteStatus, setActviteStatus] = useState(false);
    const [actviteStatusN, setActviteStatusN] = useState(false);

    const navigation = useNavigation()

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    function handleChangeStatus(v: string) {
        if (v === 'sim') {
            setActviteStatus(!actviteStatus)
            setActviteStatusN(false)

        } else {
            setActviteStatusN(!actviteStatusN)
            setActviteStatus(false)

        }
    }

    function hangleGoBack() {
        navigation.goBack()
    }

    function handleGoStatusDiet(){
        if(actviteStatus){
            navigation.navigate('successDiet')
        } else{
            navigation.navigate('failureDiet')
        }
    }


    return (
        <Container>
            <Header>
                <TouchableOpacity onPress={hangleGoBack}>
                    <Icon name='arrow-left' />
                </TouchableOpacity>
                <Title>Nova refeição</Title>
            </Header>

            <Body>
                <Label>Nome</Label>
                <Input />

                <Label>Descrição</Label>
                <Input />

                <MomentData>
                    <View style={{ width: '46%' }}>
                        <Label>Data</Label>
                        <DateIntem onPress={showDatepicker}>
                            <Text>
                                {date.getDate()}/
                                {date.getMonth() + 1}/
                                {date.getFullYear()}
                            </Text>
                        </DateIntem>
                    </View>

                    <View style={{ width: '46%' }}>
                        <Label>Hora</Label>
                        <HourIntem onPress={showTimepicker}>
                            <Text>{date.getHours()}:{date.getMinutes()}</Text>
                        </HourIntem>
                    </View>
                </MomentData>

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}

                <Label>Está dentro da dieta?</Label>
                <QuestionDiet>
                    <ButtonQuestion
                        title='Sim'
                        type='PRIMARY'
                        onPress={() => handleChangeStatus('sim')}
                        isActive={actviteStatus}
                    />

                    <ButtonQuestion
                        title='Não'
                        type='SECONDARY'
                        onPress={() => handleChangeStatus('não')}
                        isActive={actviteStatusN}
                    />
                </QuestionDiet>

                <Button
                    title='Cadastrar refeição'
                    onPress={handleGoStatusDiet}
                />
            </Body>

        </Container>
    )
}