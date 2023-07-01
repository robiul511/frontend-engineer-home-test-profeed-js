import styled from "vue3-styled-components";

const notificationProps = {
  color: 'green'
}

export const StyledNotification = styled('div', notificationProps)`
  background-color: #${props => props.color === 'danger' ? 'EF4444': '10B981'}; 
  padding: 0.5rem;
  font-size: 1rem;
  font-family: arial;
`;