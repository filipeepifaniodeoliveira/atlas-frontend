import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #4f94cd;
  border-radius: 10px;
  width: 80px;
  height: 100px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const Name = styled.h2`
  width: 100%;
  align-items: center;
  font-size: 11px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.alternative.blue1};
`;

export const ItemIcon = styled.div`
  margin-top: 22px;
  align-items: center;
  font-size: 25px;
  display: flex;
  justify-content: center;
`;
