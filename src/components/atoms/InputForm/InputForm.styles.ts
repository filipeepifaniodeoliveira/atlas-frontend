import styled from 'styled-components';

const InputFormStyles = styled.div`
  position: relative;
  flex: 1;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }

  label {
    color: ${props => props.theme.colors.natural.type4};
    font-size: 12px;
  }

  .inputFormIconContainer {
    position: absolute;
    left: 10px;
    svg {
      color: ${props => props.theme.colors.natural.type4};
    }
  }

  input {
    display: block;
    border: 0px;
    padding: 10px 10px 10px 35px;
    border: 1px solid ${props => props.theme.colors.natural.type4};
    width: 100%;
    transition: all 0.3s;
    &[type='text'] {
      color: ${props => props.theme.colors.natural.type4};
    }
  }

  small:first-of-type {
    display: block;
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 10px;
    transition: all 0.3s;
  }
`;

export default InputFormStyles;
