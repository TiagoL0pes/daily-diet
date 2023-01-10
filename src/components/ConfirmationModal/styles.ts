import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.25);
`;

export const Content = styled.View`
  margin: auto 24px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  margin: 24px 0 32px 0;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const ModalActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
