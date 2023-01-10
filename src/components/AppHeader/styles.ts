import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = { background: string };

export const Container = styled.View<Props>`
  height: 200px;
  background-color: ${({ background }) => background};
`;

export const Header = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  margin-top: 24px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const Icon = styled(ArrowLeft).attrs(
  ({ theme, color = theme.COLORS.GRAY_200 }) => ({
    size: 24,
    color,
  })
)``;
