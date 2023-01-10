import {
  IconProps,
  PencilSimpleLine,
  Plus,
  Trash,
} from "phosphor-react-native";
import { StyledComponent } from "styled-components";
import styled, { DefaultTheme } from "styled-components/native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStyleProps;
  focus?: boolean;
  full?: boolean;
};

export const Container = styled.TouchableOpacity<Props>`
  flex: ${({ full }) => (full ? 1 : "none")};
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  padding: 16px 24px;
  background-color: ${({ theme, type, disabled, focus }) => {
    if (focus) {
      return type === "PRIMARY" ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_500;
    } else {
      if (type === "PRIMARY") {
        return disabled ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_200;
      } else {
        return theme.COLORS.WHITE;
      }
    }
  }};
  border: solid 1px
    ${({ theme, type }) =>
      type === "PRIMARY" ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_100};
`;

export const Title = styled.Text<Props>`
  margin-left: 12px;
  color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
`;

type ButtonIconProps = StyledComponent<
  (props: IconProps) => JSX.Element,
  DefaultTheme,
  Props,
  never
>;

const getIconColor = (theme: DefaultTheme, type: ButtonIconTypeStyleProps) =>
  type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100;

export const AddIcon: ButtonIconProps = styled(Plus).attrs<Props>(
  ({ theme, type }) => ({
    size: 24,
    color: getIconColor(theme, type),
  })
)``;

export const EditIcon: ButtonIconProps = styled(PencilSimpleLine).attrs<Props>(
  ({ theme, type }) => ({
    size: 24,
    color: getIconColor(theme, type),
  })
)``;

export const RemoveIcon: ButtonIconProps = styled(Trash).attrs<Props>(
  ({ theme, type }) => ({
    size: 24,
    color: getIconColor(theme, type),
  })
)``;
