import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

type TitleProps = { size: number };

export const Title = styled.Text<TitleProps>`
  ${({ theme, size }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${size}px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
