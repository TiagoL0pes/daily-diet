import { StatisticsInfo } from '@components/StatisticsInfo';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, Header, Icon, Title, TitleContainer } from './styles';

type Props = {
    title?: string;
    statisticTitle?: string;
    color?: string;
    showStatisticsInfo?: boolean;
    background: string;
}

export const AppHeader = ({
    title,
    statisticTitle,
    color,
    showStatisticsInfo = false,
    background }: Props) => {
    const { FONT_SIZE } = useTheme();

    const navigation = useNavigation();

    const handleGoBack = () => navigation.goBack();


    return (
        <Container
            background={background}
        >
            <Header>
                <TouchableOpacity
                    onPress={handleGoBack}
                >
                    <Icon color={color} />
                </TouchableOpacity>
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
            </Header>

            {
                showStatisticsInfo &&
                <StatisticsInfo
                    title={statisticTitle as string}
                    titleSize={FONT_SIZE.XXL}
                    subtitle="das refeições dentro da dieta"
                />
            }
        </Container>
    )
}