import React, { useState } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { Container, DefaultInput, Label } from './styles';

type InputType = "DEFAULT" | "TEXTAREA";

type Props = {
    label: string;
    text: string;
    setText: (text: string) => void;
    type?: InputType;
    style?: StyleProp<TextStyle>;
}
export const CustomTextInput = ({
    label,
    text,
    setText,
    type = "DEFAULT",
    style }: Props) => {
    const [focus, setFocus] = useState(false);

    const textType = type === "TEXTAREA" ?
        { multiline: true, numberOfLines: 4 } :
        { multiline: false, numberOfLines: 1 };
    const maxLength = { DEFAULT: 100, TEXTAREA: 400 };

    return (
        <Container >
            <Label style={style}>{label}</Label>
            <DefaultInput
                style={style}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                textAlignVertical='top'
                multiline={textType.multiline}
                numberOfLines={textType.numberOfLines}
                maxLength={maxLength[type]}
                focus={focus}
                value={text}
                onChangeText={setText}
            />
        </Container>
    )
}