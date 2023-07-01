import styled from "vue3-styled-components";

const navItemsProps = {
  isSelected: false
}

export const StyledNavbarItems = styled('div', navItemsProps)`
  pading: 1rem;
  margin: 1rem;
  color: ${ props => props.isSelected ? '#6657F5' : '293845'}
  cursor: pointer;
`