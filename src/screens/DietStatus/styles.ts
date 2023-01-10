import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View``;

type TitleProps = { isHealthy: boolean };

export const Title = styled.Text<TitleProps>`
  margin-bottom: 15px;
  text-align: center;

  ${({ theme, isHealthy }) => css`
    color: ${isHealthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const StatusImage = styled.Image`
  margin: 40px 0 32px 0;
  width: 224px;
  height: 288px;
`;
