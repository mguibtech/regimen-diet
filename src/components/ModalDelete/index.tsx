import { Button } from "@components/Button"
import { Container, TextDescription } from "./styles"
import { View, TouchableOpacity, Modal } from 'react-native'

type Prop = {
    visible: boolean;
    handleClose: () => void;
}

export function ModalDelete({ visible, handleClose }: Prop) {
    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            statusBarTranslucent
        >
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.25)'
            }}>

                <View style={{
                    margin: 20,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    padding: 35,
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                }}>
                    <TextDescription>
                        Deseja realmente excluir o registro da refeição?
                    </TextDescription>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                        <Button title="Cancelar" type="SECONDARY" onPress={handleClose} />
                        <Button title="Sim, excluir" type="PRIMARY" />
                    </View>
                </View>



            </View>
        </Modal>
    )
}