import ItemMenu from '../../atoms/ItemMenu'
import MenuStylized from './styles'
import { Props } from '../../../../data/Props'

const Menu = ({ itensMenu }: Props) => {
  return (
    <MenuStylized>
      {itensMenu?.map((item) => {
        return <ItemMenu key={item} SecaoMenu={item}></ItemMenu>
      })}
    </MenuStylized>
  )
}
export default Menu
