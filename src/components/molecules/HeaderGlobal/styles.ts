import styled from 'styled-components';
import NextImage from 'next/image';

export const CardImage = styled(NextImage).attrs({
  loading: 'lazy',
  quality: 85,
  width: 210,
  height: 70,
})`
  object-fit: cover;
`;

export const Container = styled.header`
  background-image: ${props =>
    `linear-gradient(to right, ${props.theme.colors.alternative.blue1}, ${props.theme.colors.alternative.blue3})`};
  align-items: center;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  display: flex;
  justify-content: space-between;
  padding: ${props =>
    `${props.theme.spacings.sp02} ${props.theme.spacings.sp08} `};
  width: 100%;
  height: 100px;

  @media (max-width: ${props => props.theme.media.resolution.mobile.md}) {
    img {
      width: 150px;
    }
    height: 80px;
  }
`;

export const ContainerMenu = styled.div`
  font-size: ${props => props.theme.fontsSizes['2xl']};
  color: ${props => props.theme.colors.natural.type1};
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  color: ${props => props.theme.colors.natural.type1};

  @media (max-width: ${props => props.theme.media.resolution.mobile.md}) {
    font-size: ${props => props.theme.fontsSizes.lg};
  }
  svg {
    cursor: pointer;
  }
`;

export const ContainerLogo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontsSizes['5xl']};
  line-height: ${props => props.theme.lineHights.none};
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.natural.type1};

  @media (max-width: ${props => props.theme.media.resolution.mobile.large}) {
    font-size: ${props => props.theme.fontsSizes['4xl']};
  }

  @media (max-width: ${props => props.theme.media.resolution.mobile.md}) {
    font-size: ${props => props.theme.fontsSizes['3xl']};
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;

  margin-top: ${props => props.theme.spacings.sp03};
  margin-left: ${props => props.theme.spacings.sp01};

  @media (max-width: ${props => props.theme.media.resolution.mobile.large}) {
    width: 2.4rem;
    height: 2.4rem;

    margin-top: ${props => props.theme.spacings.sp02};
  }

  @media (max-width: ${props => props.theme.media.resolution.mobile.md}) {
    width: 2rem;
    height: 2rem;

    margin-top: ${props => props.theme.spacings.sp02};
  }
`;

export const Logo = styled(NextImage).attrs({
  layout: 'fill',
})``;
