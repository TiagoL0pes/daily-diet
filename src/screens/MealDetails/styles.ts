import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;

  margin-top: -96px;
  padding: 0px 24px 37px 24px;
`;

export const Content = styled.View`
  padding-top: 40px;
`;

export const Actions = styled.View`
  margin-bottom: 40px;
`;

type TitleProps = {
  isSmall?: boolean;
  isBold?: boolean;
};

export const Title = styled.Text<TitleProps>`
  ${({ theme, isSmall, isBold }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${isBold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    font-size: ${isSmall ? theme.FONT_SIZE.SM : theme.FONT_SIZE.LG}px;
  `}
`;

type SubtitleProps = { marginTop: number };

export const Subtitle = styled.Text<SubtitleProps>`
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Chip = styled.View`
  flex-direction: row;
  align-items: center;

  width: 164px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  padding: 8px 16px;
  border-radius: 1000px;
`;
