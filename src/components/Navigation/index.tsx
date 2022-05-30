
import { Icon, Wrapper } from './index.styled'
import Icons from '../../assets/icons'




const Navigation = () => {
  
  return (
    <Wrapper>
      

      
      <Icon><Icons.Home/></Icon>
      <Icon><Icons.Dumbbell/></Icon>
      <Icon><Icons.Privat/></Icon>
      <Icon><Icons.Contact/></Icon>
      
    </Wrapper>
  )
}

export default Navigation