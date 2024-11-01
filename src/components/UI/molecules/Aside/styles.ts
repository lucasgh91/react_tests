import styled from 'styled-components'

const AsideStylized = styled.aside`
  font-size: 0.8rem;
  display: grid;
  align-items: center;

  ul {
    display: grid;
    grid-template-areas:
      'a a'
      'b c';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 20px;

    li {
      h3 {
        color: black;
      }
      p {
        color: #808080;
      }
    }
  }
`
export default AsideStylized
