import { ActionButton } from '@components/Buttons/ActionButton';
import { useNavigation } from '@react-navigation/native';
import { removeMealByName } from '@storage/Meal/removeMealByName';
import React from 'react';
import { Alert, Modal } from 'react-native';
import { Container, Content, ModalActions, Title } from './styles';

type ModalProps = {
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
    mealName: string;
}

export const ConfirmationModal = ({
    isVisible,
    setIsVisible,
    mealName,
}: ModalProps) => {
    const navigation = useNavigation();

    const handleRemove = async () => {
        try {
            await removeMealByName(mealName);
        } catch (error) {
            Alert.alert('Remover refeição', `Não foi possível remover a refeição ${mealName}`);
        } finally {
            navigation.navigate('home');
            setIsVisible(false);
        }
    }

    return (
        <Modal
            animationType="fade"
            transparent
            visible={isVisible}
        >
            <Container>
                <Content>
                    <Title>
                        Deseja realmente excluir o registro da refeição?
                    </Title>
                    <ModalActions>
                        <ActionButton
                            title="Cancelar"
                            type="SECONDARY"
                            full
                            onPress={() => setIsVisible(false)}
                        />

                        <ActionButton
                            style={{ marginLeft: 12 }}
                            title="Sim, excluir"
                            type="PRIMARY"
                            full
                            onPress={handleRemove}
                        />
                    </ModalActions>
                </Content>
            </Container>
        </Modal>
    )
}