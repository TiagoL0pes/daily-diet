import React from 'react';
import { Container } from './styles';

export const DefaultContainer = ({ children }: any) => {
    return (
        <Container>
            {children}
        </Container>
    )
}