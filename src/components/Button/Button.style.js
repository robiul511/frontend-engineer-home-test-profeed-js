import styled from "vue3-styled-components";

const btnProps = {
  variant: 'default'
}

export const StyledButton = styled('button', btnProps)`
  font-size: 1.5em;
  color: #${props => props.variant === 'danger' ? 'EF4444' : '6657F5'};
  border-radius: 5px;
  border: 1px ridge #${props => props.variant === 'danger' ? 'EF4444' : '6657F5'};
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 700;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    background-color: #F2F2F2;
  }
  
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const StyledInsideButton = styled.div`
  display: flex
  align-items: center; 
  text-align: center;
  gap: 0.3rem
`