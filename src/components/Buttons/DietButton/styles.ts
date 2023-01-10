import styled, { css } from "styled-components/native";

export type ContainerProps = {
  isHealthy: boolean;
  isSelected: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme, isHealthy, isSelected }) => {
    if (isSelected) {
      return isHealthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT;
    } else {
      return theme.COLORS.GRAY_600;
    }
  }};
  
  padding: 16px;
  
  border-radius: 6px;
  border: solid 1px
    ${({ theme, isHealthy, isSelected }) => {
      if (isSelected) {
        return isHealthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK;
      } else {
        return theme.COLORS.GRAY_600;
      }
    }};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  padding: 16px;
  border-radius: 6px;
`;

export type DotProps = {
  isHealthy: boolean;
  isSmall?: boolean;
};

export const Dot = styled.View<DotProps>`
  ${({ isSmall }) => css`
    border-radius: ${isSmall ? "4px" : "8px"};
    width: ${isSmall ? "8px" : "14px"};
    height: ${isSmall ? "8px" : "14px"};
  `}

  background-color: ${({ theme, isHealthy, isSmall }) => {
    if (isSmall) {
      return isHealthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK;
    } else {
      return isHealthy ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID;
    }
  }}
`;
