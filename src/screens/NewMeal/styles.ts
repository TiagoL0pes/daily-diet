import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;

  margin-top: -96px;
  padding: 0px 24px 37px 24px;
`;

export const FormGroup = styled.View`
  flex-direction: row;
  margin-top: 34px;
`;
