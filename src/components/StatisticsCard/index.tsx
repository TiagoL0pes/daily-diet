import { StatisticsInfo } from '@components/StatisticsInfo';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonIcon, Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    subtitle: string;
    titleSize: number;
    background: string;
    showButton?: boolean;
}

export const StatisticsCard = ({
    title,
    subtitle,
    titleSize,
    background,
    showButton,
    ...args }: Props) => {
    return (
        <Container
            background={background}
            {...args}
        >
            {
                showButton &&
                <ButtonIcon>
                    <Icon />
                </ButtonIcon>
            }

            <StatisticsInfo
                title={title}
                subtitle={subtitle}
                titleSize={titleSize}
            />
        </Container>
    )
}