import styled from 'styled-components';

export const Itens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.5em;
  background : ${props => `#${props.color}`};
  color: #fff;
  padding: 15px;
  width: 18%;
  height: 15vh;

  border: 2px solid ${props => `#${props.borderColor}`};
  border-top-right-radius: 30px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 30px;
  transition: all 0.3s ease-in;

  & span{
    font-size: 16px;
    font-weight: 600;
  }

  &:hover{
    transform: scale(1.1);
  }
`;
