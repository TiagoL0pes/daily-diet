import React, { useEffect, useState } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { Container, DefaultInput, ErrorMessage, Label } from './styles';

export const DATE_REGEX = /^([0-2][0-9]|3[0-1])\/?([0][0-9]|1[0-2])\/?(\d+)$/g;
export const TIME_REGEX = /^([0-1]?[0-9]|2[0-3]):?[0-5][0-9]$/g;

type InputType = "DATE" | "TIME";

type Props = {
    label: string;
    text: string;
    setText: (text: string) => void;
    type: InputType;
    style?: StyleProp<TextStyle>;
}
export const DateTimeInput = ({
    label,
    text,
    setText,
    type,
    style }: Props) => {
    const [focus, setFocus] = useState(false);
    const [message, setMessage] = useState('');

    const maxLength = { DATE: 10, TIME: 5, };
    const format = type === "DATE" ? 'DD/MM/YYYY' : 'HH:mm';

    useEffect(() => {
        if (type === "DATE") {
            if (text.trim().length >= 8 && !text.match(DATE_REGEX)) {
                setMessage("Data inválida");
            } else {
                setMessage("");
            }
        } else {
            if (text.trim().length >= 4 && !text.match(TIME_REGEX)) {
                setMessage("Hora inválida");
            } else {
                setMessage("");
            }
        }
    }, [text]);

    return (
        <Container>
            <Label style={style}>{label}</Label>
            <DefaultInput
                style={style}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                keyboardType="numeric"
                maxLength={maxLength[type]}
                focus={focus}
                type='datetime'
                options={{ format }}
                value={text}
                onChangeText={setText}
            />
            <ErrorMessage
                style={type === "TIME" ? { marginLeft: 10 } : null}
            >
                {message}
            </ErrorMessage>
        </Container>
    )
}