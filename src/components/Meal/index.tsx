import { Dot } from '@components/Buttons/DietButton/styles';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Time, Title, TitleContainer } from './styles';

type Props = TouchableOpacityProps & {
    time: string;
    title: string;
    isHealthy: boolean;
}

export const Meal = ({ time, title, isHealthy, ...args }: Props) => {
    return (
        <Container {...args}>
            <Time>{time}</Time>

            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>

            <Dot
                isHealthy={isHealthy}
                isSmall={false}
            />
        </Container>
    )
}