import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  margin-top: 24px;
  margin-bottom: 33px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Profile = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;
  border: solid 2px ${({ theme }) => theme.COLORS.GRAY_200};
`;
