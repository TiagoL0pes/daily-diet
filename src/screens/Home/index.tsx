import { ActionButton } from '@components/Buttons/ActionButton';
import { DefaultContainer } from '@components/DefaultContainer';
import { HomeHeader } from '@components/Header';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { Meal } from '@components/Meal';
import { StatisticsCard } from '@components/StatisticsCard';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getAllMeals } from '@storage/Meal/getAllMeals';
import { MealModel } from '@storage/Meal/model/meal.model';
import { percentageMealDiet } from '@storage/Statistics/percentageMealDiet';
import { groupMealsByDate } from '@utils/MealFunctions';
import React, { useCallback, useState } from 'react';
import { Alert, SectionList } from 'react-native';
import { useTheme } from 'styled-components/native';
import { CardGroup, Content, SectionTitle, Title } from './styles';

export const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [meals, setMeals] = useState<MealModel[]>([]);

    const { COLORS, FONT_SIZE } = useTheme();

    const navigation = useNavigation();

    const isDietHealthy = () => Number(title.slice(0, 2)) >= 50;

    const handleOpenStatistics = () => navigation.navigate('statistics', { title, inDiet: isDietHealthy() });

    const handleAddNewMeal = () => navigation.navigate('newMeal', { edit: false });

    const handleOpenMealDetails = (meal: Omit<MealModel, "date">) =>
        navigation.navigate('details', { name: meal.name, isHealthy: meal.isHealthy });

    const mealsWithinDiet = async () =>
        setTitle(await percentageMealDiet(true));

    const fetchMeals = async () => {
        try {
            setIsLoading(true);

            const meals = await getAllMeals();

            setMeals(meals);
        } catch (error) {
            Alert.alert('Refeições', 'Não foi possível carregar as refeições');
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        mealsWithinDiet();
        fetchMeals();
    }, []))

    return (
        <DefaultContainer>
            <HomeHeader />

            <Content>
                <CardGroup>
                    <StatisticsCard
                        title={title}
                        titleSize={FONT_SIZE.XXL}
                        background={isDietHealthy() ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
                        subtitle="das refeições dentro da dieta"
                        showButton
                        onPress={handleOpenStatistics}
                    />
                </CardGroup>

                <Title>Refeições</Title>

                <ActionButton
                    title="Nova refeição"
                    iconType="ADD"
                    type="PRIMARY"
                    onPress={handleAddNewMeal}
                />

                {
                    isLoading ? <Loading /> :
                        <SectionList
                            sections={groupMealsByDate(meals)}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) => (
                                <Meal
                                    time={item.time}
                                    title={item.name}
                                    isHealthy={item.isHealthy}
                                    onPress={() => handleOpenMealDetails(item)}
                                />
                            )}
                            renderSectionHeader={({ section: { title } }) => (
                                <SectionTitle>{title.replace(/\//g, '.')}</SectionTitle>
                            )}
                            contentContainerStyle={
                                meals.length === 0 &&
                                {
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }
                            }
                            ListEmptyComponent={() => (
                                <ListEmpty message="Cadastre uma refeição para planejar sua dieta" />
                            )}
                        />
                }

            </Content>
        </DefaultContainer>
    )
}