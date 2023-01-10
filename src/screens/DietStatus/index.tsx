import { ActionButton } from '@components/Buttons/ActionButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Container, Info, StatusImage, Strong, Subtitle, Title } from './styles';
import success from '@assets/success.png';
import fail from '@assets/fail.png';

type RouteParams = { isHealthy: string };

export const DietStatus = () => {
    const navigation = useNavigation();

    const route = useRoute();
    const { isHealthy } = route.params as RouteParams;

    return (
        <Container>
            <Info>
                <Title isHealthy={Boolean(isHealthy)}>
                    {isHealthy ? 'Continue assim!' : 'Que pena!'}
                </Title>
                {
                    isHealthy ?
                        <Subtitle>
                            Você continua <Strong>dentro da dieta</Strong>. Muito bem!
                        </Subtitle> :
                        <>
                            <Subtitle>
                                Você <Strong>saiu da dieta</Strong> dessa vez, mas continue
                            </Subtitle>
                            <Subtitle>
                                se esforçando e não desista!
                            </Subtitle>
                        </>

                }
            </Info>

            <StatusImage source={isHealthy ? success : fail} />

            <ActionButton
                title="Ir para a páignal inicial"
                type="PRIMARY"
                onPress={() => navigation.navigate('home')}
            />
        </Container>
    )
}