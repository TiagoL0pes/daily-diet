import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Dot, Title } from './styles';

type Props = TouchableOpacityProps & {
    isHealthy: boolean;
    isSelected: boolean;
    onPress: () => void;
}

export const DietButton = ({
    isHealthy,
    isSelected,
    onPress: handleSelectedOption,
    ...args }: Props) => {

    return (
        <Container
            onPress={handleSelectedOption}
            isHealthy={isHealthy}
            isSelected={isSelected}
            {...args}
        >
            <Dot isHealthy={isHealthy} />
            <Title>{isHealthy ? 'Sim' : 'Não'}</Title>
        </Container>
    )
}