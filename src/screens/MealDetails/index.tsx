import { AppHeader } from '@components/AppHeader';
import { ActionButton } from '@components/Buttons/ActionButton';
import { Dot } from '@components/Buttons/DietButton/styles';
import { ConfirmationModal } from '@components/ConfirmationModal';
import { DefaultContainer } from '@components/DefaultContainer';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getMealByName } from '@storage/Meal/getMealByName';
import { MealModel } from '@storage/Meal/model/meal.model';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Actions, Chip, Container, Content, Subtitle, Title } from './styles';

type RouteParams = {
    name: string,
    isHealthy: string
};

export const MealDetails = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [meal, setMeal] = useState<MealModel>({} as MealModel);

    const { COLORS } = useTheme();

    const navigation = useNavigation();

    const route = useRoute();
    const { name, isHealthy } = route.params as RouteParams;

    const handleEditMeal = () => {
        navigation.navigate('newMeal', {
            edit: true,
            name
        })
    }

    const fetchMealByName = async () => {
        try {
            const storedMeal = await getMealByName(name);
            setMeal(storedMeal);
        } catch (error) {
            Alert.alert(`Refeição', 'Não foi possível carregar a refeição ${name}`);
        }
    }

    useEffect(() => {
        fetchMealByName();
    }, [])

    return (
        <DefaultContainer>
            <AppHeader
                title="Refeição"
                background={Boolean(isHealthy) ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
            />
            <Container>
                <Content>
                    <Title isBold>
                        {meal.name}
                    </Title>
                    <Subtitle marginTop={18}>
                        {meal.description}
                    </Subtitle>

                    <Title
                        isSmall
                        isBold
                    >
                        Data e hora
                    </Title>
                    <Subtitle marginTop={8}>
                        {meal.date} às {meal.time}
                    </Subtitle>

                    <Chip>
                        <Dot
                            isHealthy={Boolean(isHealthy)}
                            isSmall
                        />
                        <Title
                            isSmall
                            style={{ marginLeft: 8 }}
                        >
                            dentro da dieta
                        </Title>
                    </Chip>

                </Content>

                <Actions>
                    <ActionButton
                        title="Editar refeição"
                        type="PRIMARY"
                        iconType="EDIT"
                        style={{ marginBottom: 9 }}
                        onPress={handleEditMeal}
                    />

                    <ActionButton
                        title="Excluir refeição"
                        type="SECONDARY"
                        iconType="REMOVE"
                        onPress={() => setIsVisible(true)}
                    />
                </Actions>
            </Container>

            <ConfirmationModal
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                mealName={name}
            />
        </DefaultContainer>
    )
}