import styled from 'styled-components';

export const AppStyled = styled.div`
  width: 340px;

  border: ${p => p.theme.borders.none};
  border-radius: 20px;

  box-shadow: ${p => p.theme.shadows.standart};

  overflow: hidden;
`;

export const AppTitleStyled = styled.h1`
  margin-top: ${p => p.theme.space[0]};

  font-size: ${p => p.theme.fontSizes.xxl};
`;
