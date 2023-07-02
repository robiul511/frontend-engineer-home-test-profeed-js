import styled from "vue3-styled-components";

const notificationProps = {
  color: 'green'
}

export const StyledNotification = styled('div', notificationProps)`
  background-color: #F2F2F2; 
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: arial;
  opacity: 0.8;
  color: #${props => props.color === 'danger' ? 'EF4444': '10B981'}; 
`;