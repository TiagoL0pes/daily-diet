import React from 'react';
import { Container, Subtitle, Title } from './styles';

type Props = {
    title: string;
    subtitle: string;
    titleSize: number;
}

export const StatisticsInfo = ({ title, subtitle, titleSize }: Props) => {
    return (
        <Container>
            <Title size={titleSize}>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}