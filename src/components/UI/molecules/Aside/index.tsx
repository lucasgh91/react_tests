import Article from '../Article'
import AsideStylized from './styles'

const Aside = () => {
  return (
    <AsideStylized>
      <ul>
        <li style={{ gridArea: 'a' }}>
          <Article />
        </li>
        <li style={{ gridArea: 'b' }}>
          <Article />
        </li>
        <li style={{ gridArea: 'c' }}>
          <Article />
        </li>
      </ul>
    </AsideStylized>
  )
}
export default Aside
