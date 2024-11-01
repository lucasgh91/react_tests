import Logo from '../../atoms/Logo'
import Menu from '../../molecules/Menu'
import HeaderStylized from './styles'
import { Props } from '../../../../data/Props'

const Header = ({ itensMenu }: Props) => (
  <HeaderStylized>
    <Logo />
    <Menu itensMenu={itensMenu} />
  </HeaderStylized>
)
export default Header
