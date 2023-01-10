import styled, { css } from "styled-components/native";

export const Content = styled.View`
  padding: 24px;
  flex: 1;
`;

export const CardGroup = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const SectionTitle = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;
