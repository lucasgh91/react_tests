import styled from 'styled-components'

const HeaderStylized = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`
export default HeaderStylized
