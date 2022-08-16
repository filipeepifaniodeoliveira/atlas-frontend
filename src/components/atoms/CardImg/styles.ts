import styled from 'styled-components';
import NextImage from 'next/image';
import Cruz from '../../../../public/images/cruz.jpg';
interface ContentProps {
  img: any;
}

export const Container = styled.header<ContentProps>`
  background-image: img(${props => props.img});
`;
