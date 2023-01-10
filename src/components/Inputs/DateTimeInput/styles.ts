import { TextInputMask } from "react-native-masked-text";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

type DefaultInputProps = {
  focus: boolean;
  value: string;
};

export const DefaultInput = styled(TextInputMask)<DefaultInputProps>`
  padding: 14px;
  min-height: 48px;

  border: solid 1px
    ${({ theme, focus, value }) => {
      if (focus) {
        return value.length > 0 ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_300;
      } else {
        return value.length > 0 ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500;
      }
    }};

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  border-radius: 6px;
`;

export const ErrorMessage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
