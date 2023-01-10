import { AppHeader } from '@components/AppHeader';
import { DefaultContainer } from '@components/DefaultContainer';
import { StatisticsCard } from '@components/StatisticsCard';
import { useRoute } from '@react-navigation/native';
import { getAllMeals } from '@storage/Meal/getAllMeals';
import { MealModel } from '@storage/Meal/model/meal.model';
import { groupMealsByDate } from '@utils/MealFunctions';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import { CardGroup, Container, Title } from './styles';

type RouteParams = {
    title: string,
    inDiet: boolean
};

const INITIAL_STATE = {
    bestSequel: "0",
    totalMeals: "0",
    totalHealthy: "0",
    totalNotHealthy: "0",
}

export const Statistics = () => {
    const route = useRoute();
    const { title, inDiet } = route.params as RouteParams;

    const [statistics, setStatistics] = useState(INITIAL_STATE);

    const { COLORS, FONT_SIZE } = useTheme();

    const amountOfMeals = (meals: MealModel[], isHealthy: boolean) =>
        String(meals.filter(meal => meal.isHealthy === isHealthy).length);

    const getBestMealsSequel = (meals: MealModel[]) => {
        const groups = groupMealsByDate(meals);

        const { bestSequel } = groups.reduce((stored, group) => {

            group.data.forEach(meal => {
                if (meal.isHealthy) {
                    stored.lastCheck += 1;
                } else {
                    stored.lastCheck = 0;
                }

                if (stored.bestSequel < stored.lastCheck) {
                    stored.bestSequel = stored.lastCheck;
                }
            })
            return stored;
        }, {
            bestSequel: 0,
            lastCheck: 0
        })

        return String(bestSequel);
    }

    const getStatistics = async () => {
        const meals = await getAllMeals();
        const bestSequel = getBestMealsSequel(meals);
        const totalMeals = String(meals.length);
        const totalHealthy = amountOfMeals(meals, true);
        const totalNotHealthy = amountOfMeals(meals, false);

        setStatistics(prev => ({
            ...prev,
            totalMeals,
            bestSequel,
            totalHealthy,
            totalNotHealthy
        }));
    }

    useEffect(() => {
        getStatistics();
    }, [])

    return (
        <DefaultContainer>
            <AppHeader
                statisticTitle={title}
                color={inDiet ? COLORS.GREEN_DARK : COLORS.RED_DARK}
                background={inDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
                showStatisticsInfo
            />

            <Container>
                <Title>Estatísticas gerais</Title>

                <CardGroup>
                    <StatisticsCard
                        title={statistics.bestSequel}
                        titleSize={FONT_SIZE.XL}
                        background={COLORS.GRAY_600}
                        subtitle="melhor sequência de pratos dentro da dieta"
                    />
                </CardGroup>

                <CardGroup>
                    <StatisticsCard
                        title={statistics.totalMeals}
                        titleSize={FONT_SIZE.XL}
                        background={COLORS.GRAY_600}
                        subtitle="refeições registradas"
                    />
                </CardGroup>

                <CardGroup>
                    <StatisticsCard
                        title={statistics.totalHealthy}
                        titleSize={FONT_SIZE.XL}
                        background={COLORS.GREEN_LIGHT}
                        subtitle="refeições dentro da dieta"
                    />

                    <StatisticsCard
                        style={{ marginLeft: 12 }}
                        title={statistics.totalNotHealthy}
                        titleSize={FONT_SIZE.XL}
                        background={COLORS.RED_LIGHT}
                        subtitle="refeições fora da dieta"
                    />
                </CardGroup>
            </Container>
        </DefaultContainer>
    )
}