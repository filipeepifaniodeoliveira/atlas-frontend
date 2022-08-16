import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.natural.type2};
  box-shadow: rgb(0 0 0 / 22%) 0px 1px 4px;
  display: flex;
  justify-content: center;
  padding: ${props =>
    `${props.theme.spacings.sp02} ${props.theme.spacings.sp08} `};
  width: 100%;
  height: 70px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Item = styled.div`
  padding: ${props =>
    `${props.theme.spacings.sp02} ${props.theme.spacings.sp08} `};
`;

export const ItemLink = styled.h2`
  font-size: ${props => props.theme.fontsSizes.xs};
  font-weight: ${props => props.theme.fontsWeight.medium};
  color: ${props => props.theme.colors.secondary.type2};
  cursor: pointer;

  :hover {
    color: ${props => props.theme.colors.secondary.type1};
    transition: all 0.2s;
  }
`;
