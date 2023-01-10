import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { AddIcon, ButtonIconTypeStyleProps, Container, EditIcon, RemoveIcon, Title } from './styles';

export type IconTypeProps = "ADD" | "EDIT" | "REMOVE";

const icons = {
    ADD: AddIcon,
    EDIT: EditIcon,
    REMOVE: RemoveIcon,
};

type Props = TouchableOpacityProps & {
    title: string;
    type: ButtonIconTypeStyleProps;
    disabled?: boolean;
    iconType?: IconTypeProps;
    full?: boolean;
}

export const ActionButton = ({
    title,
    iconType,
    disabled = false,
    type = 'PRIMARY',
    full,
    ...args }: Props) => {
    const [focus, setFocus] = useState(false);

    const Icon = iconType && icons[iconType];

    return (
        <Container
            onPressIn={() => setFocus(true)}
            onPressOut={() => setFocus(false)}
            focus={focus}
            disabled={disabled}
            type={type}
            full={full}
            {...args}
        >
            {Icon && <Icon type={type} />}
            <Title type={type} >
                {title}
            </Title>
        </Container>
    )
}