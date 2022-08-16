import styled from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  background-image: ${props =>
    `linear-gradient(to right, ${props.theme.colors.alternative.blue1}, ${props.theme.colors.alternative.blue3})`};

  padding: 10px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .clearfix {
    clear: both;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const Colunm = styled.div`
  width: 190px;
  height: auto;
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0px 20px 20px 20px;
`;

export const Title = styled.div`
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: 12px;
  line-height: 17px;
  padding: 20px 0px 5px 0px;
  color: ${props => props.theme.colors.primary.colorNeutralWhite};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.25em;
`;

export const List = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export const Item = styled.div`
  color: #ffffff;
  font-size: 13px;
  font-family: inherit;
  font-weight: 400;
  padding: 5px 0px 5px 0px;
  cursor: pointer;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;

  :hover {
    color: #ffffff;
    transition: 0.1s;
    -webkit-transition: 0.1s;
    -moz-transition: 0.1s;
  }
`;

export const Container = styled.footer`
  margin: 0 auto;
`;

export const FooterMobile = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 70px;
  background-color: ${props => props.theme.colors.alternative.blue1};
  padding: 10px 60px;
  display: flex;
  justify-content: Center;

  @media only screen and (min-width: 700px) {
    position: relative;
  }
`;

export const TitleMobile = styled.div`
  margin: 0;
  padding: 0;
  font-size: ${props => props.theme.fontsSizes.sm};
  font-weight: ${props => props.theme.fontsWeight.medium};
  color: ${props => props.theme.colors.secondary.type2};
  padding: 20px 0px 5px 0px;
  color: ${props => props.theme.colors.primary.colorNeutralWhite};
  letter-spacing: 0.22em;
  font-weight: normal;
  text-transform: uppercase;

  @media only screen and (max-width: 700px) {
    font-size: 8px;
  }
`;
