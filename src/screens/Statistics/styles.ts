import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
  margin-top: -32px;
`;

export const Title = styled.Text`
  margin: 33px 0 23px 0;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const CardGroup = styled.View`
  flex-direction: row;
  margin: 0 24px 12px 24px;
`;
