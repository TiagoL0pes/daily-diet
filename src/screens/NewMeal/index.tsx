import { AppHeader } from '@components/AppHeader';
import { ActionButton } from '@components/Buttons/ActionButton';
import { DietButton } from '@components/Buttons/DietButton';
import { DefaultContainer } from '@components/DefaultContainer';
import { CustomTextInput } from '@components/Inputs/CustomTextInput';
import { DateTimeInput, DATE_REGEX, TIME_REGEX } from '@components/Inputs/DateTimeInput';
import { useNavigation, useRoute } from '@react-navigation/native';
import { addMeal } from '@storage/Meal/addMeal';
import { editMeal } from '@storage/Meal/editMeal';
import { getMealByName } from '@storage/Meal/getMealByName';
import { MealModel } from '@storage/Meal/model/meal.model';
import { AppError } from '@utils/AppError';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, FormGroup } from './styles';

type RouteParams = {
    edit: boolean,
    name: string
};

const INITIAL_STATE: MealModel = {
    name: '',
    description: '',
    date: '',
    time: '',
    isHealthy: false,
}

export const NewMeal = () => {
    const route = useRoute();
    const { edit, name } = route.params as RouteParams;

    const [form, setForm] = useState(INITIAL_STATE);
    const nameRef: any = useRef();
    const descriptionRef: any = useRef();
    const dateRef: any = useRef();
    const timeRef: any = useRef();

    const { COLORS } = useTheme();

    const navigation = useNavigation();

    const setName = (text: string) =>
        setForm(prev => ({ ...prev, name: text }));

    const setDescription = (text: string) =>
        setForm(prev => ({ ...prev, description: text }));

    const setDate = (text: string) =>
        setForm(prev => ({ ...prev, date: text }));

    const setTime = (text: string) =>
        setForm(prev => ({ ...prev, time: text }));

    const setDiet = (isHealthy: boolean) => {
        setForm(prev => ({ ...prev, isHealthy }));
    }

    const invalidForm = () =>
        form.name.trim().length === 0 ||
        form.date.trim().length !== 10 ||
        !form.date.trim().match(DATE_REGEX) ||
        form.time.trim().length !== 5 ||
        !form.time.trim().match(TIME_REGEX);

    const onSubmit = async () => {
        if (edit) {
            try {
                await editMeal(form);
                navigation.navigate('details', { name: form.name, isHealthy: form.isHealthy });
            } catch (error) {
                Alert.alert("Editar refeição", "Não foi possível editar a refeição");
            }
        } else {
            try {
                await addMeal(form);
                navigation.navigate('status', { isHealthy: form.isHealthy });
            } catch (error) {
                const defaultMessage = "Não foi possível cadastrar a refeição";
                Alert.alert("Editar refeição", error instanceof AppError ? error.message : defaultMessage);
            }

        }
    }

    const fetchMeal = async () => {
        const meal = await getMealByName(name);
        setForm(meal);
    }

    useEffect(() => {
        if (name) {
            fetchMeal();
        }
    }, [])

    return (
        <DefaultContainer>
            <AppHeader
                title={edit ? "Editar refeição" : "Nova refeição"}
                background={COLORS.GRAY_500}
            />
            <Container>
                <View>
                    <FormGroup>
                        <CustomTextInput
                            label='Nome'
                            text={form.name}
                            setText={setName}
                        />
                    </FormGroup>

                    <FormGroup>
                        <CustomTextInput
                            label='Descrição'
                            type="TEXTAREA"
                            text={form.description}
                            setText={setDescription}
                        />
                    </FormGroup>

                    <FormGroup>
                        <DateTimeInput
                            style={{ marginRight: 10 }}
                            label='Data'
                            type="DATE"
                            text={form.date}
                            setText={setDate}
                        />
                        <DateTimeInput
                            style={{ marginLeft: 10 }}
                            label='Hora'
                            type="TIME"
                            text={form.time}
                            setText={setTime}
                        />
                    </FormGroup>

                    <FormGroup>
                        <DietButton
                            style={{ marginRight: 8 }}
                            isHealthy
                            isSelected={form.isHealthy}
                            onPress={() => setDiet(true)}
                        />

                        <DietButton
                            isHealthy={false}
                            isSelected={!form.isHealthy}
                            onPress={() => setDiet(false)}
                        />
                    </FormGroup>
                </View>

                <ActionButton
                    title={edit ? "Salvar alterações" : "Cadastrar Refeição"}
                    type="PRIMARY"
                    onPress={onSubmit}
                    disabled={invalidForm()}
                />
            </Container>
        </DefaultContainer>
    )
}