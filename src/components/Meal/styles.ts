import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 14px 16px;
  margin-top: 8px;

  border: solid 1px ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const Time = styled.Text`
  margin-right: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const TitleContainer = styled.View`
  flex: 1;
  padding-left: 16px;
  border-left-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-left-width: 1px;
`;
export const Title = styled.Text``;
