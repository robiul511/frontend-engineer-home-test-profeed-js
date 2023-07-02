import styled from "vue3-styled-components";

const StyledTable = styled.table`
  width: 100%;
  border:1px solid black;
  border-radius: 0.5rem; 
  border-collapse: collapse;
  border-color: #C2CFD9
`

const StyledTableHead = styled.th`
  border:1px solid black;
  background-color: #F2F2F2;
  padding: 0.5rem; 
  font-family: arial
  border-radius: 0.5rem; 
  border-color: #C2CFD9
`

const StyledTableData = styled.td`
  border:1px solid black;
  padding: 0.5rem; 
  font-family: arial
  border-radius: 0.5rem;
  border-color: #C2CFD9;
  text-align: center;
`
const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem 2rem 0rem;
`
const StyledTab = styled.div`
  display: flex;
  gap: 0.5rem;
`

const tabItemProps = {
  isSelected: false
}
const StyledTabItem = styled('div', tabItemProps)`
  color: #${props => props.isSelected ? '6657F5' : 'gray'}
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 700;
  background-color: white;
  cursor: pointer;
  font-family: arial;&:hover {
    background-color: #F2F2F2;
  }
  ${props => props.isSelected ? 'border-bottom: 2px ridge #6657F5' : ''}
`

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin: auto;
  padding: 1rem
`

const StyledButtonForm = styled.div`
  display: flex;
  justify-content: flex-end; 
  max-width: 320px;
  padding: 0.5rem 0rem 0rem 0rem
  margin: auto;
`

export {
  StyledTable,
  StyledTableHead,
  StyledTableData,
  StyledTab,
  StyledTabItem,
  StyledNavbar,
  StyledForm,
  StyledButtonForm
}