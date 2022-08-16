import styled from 'styled-components';

export const Title = styled.h2`
  grid-row: 3/4;
  font-weight: ${props => props.theme.fontsWeight.semibold};
  color: ${props => props.theme.colors.natural.type1};
`;

export const Paragraph = styled.p`
  grid-row: 4/5;
  align-self: center;
  color: ${props => props.theme.colors.natural.type2};
  font-weight: ${props => props.theme.fontsWeight.medium};
`;

export const CardIcon = styled.p`
  grid-row: 2/3;
  font-size: 20px;

  justify-self: end;
`;

export const CardExit = styled.p`
  grid-row: 1/2;
  justify-self: end;
`;

export const Container = styled.header`
  padding: 30px;

  .yellow {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.yellow3}, ${props.theme.colors.alternative.yellow1})`};
  }

  .pink {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.pink2}, ${props.theme.colors.alternative.pink1})`};
  }

  .blue {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.blue1}, ${props.theme.colors.alternative.blue3})`};
  }

  .green {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.primary.greenPrimary}, ${props.theme.colors.alternative.green3})`};
  }

  .greenNeon {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.green1}, ${props.theme.colors.suport.type1})`};
  }

  .orange {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.orange1}, ${props.theme.colors.alternative.orange2})`};
  }
`;

export const Card = styled.div`
  padding: 20px;
  width: 100%;
  min-height: 100px;
  margin-bottom: 100px;
  display: grid;
  grid-template-rows: 1px 25px 1fr 90px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgb(0 0 0 / 25%);
  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  .card__link,
  .card__exit,
  .card__icon {
    position: relative;
    text-decoration: none;
    color: ${props => props.theme.colors.natural.type2};
  }
`;
