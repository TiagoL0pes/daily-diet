import { ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type ContainerProps = { background: string };

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 20px 16px;
  border-radius: 8px;

  ${({ background }) => css`
    background-color: ${background};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const ButtonIcon = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;
