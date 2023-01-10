import logo from '@assets/logo.png';
import profile from '@assets/profile.png';
import React from 'react';
import { Container, Logo, Profile } from './styles';

export const HomeHeader = () => {
    return (
        <Container>
            <Logo source={logo} />
            <Profile source={profile} />
        </Container>
    )
}