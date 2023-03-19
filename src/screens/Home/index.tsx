import { Header } from '@components/Header';
import { 
  Container, 
  HeaderHome,  
  Logo, 
  Text,
  User, 
} from './styles';
import logoImg from '@assets/logo.png';
import userImg from '@assets/user.png'
import { Percent } from '@components/Percent';
import { Button } from '@components/Button';



export function Home() {
  return (
    <Container>
      
      <HeaderHome>
        <Logo source={logoImg} />
        <User  source={userImg}/>
      </HeaderHome>

      <Percent icon='arrow-up-right' type='PRIMARY'/>

      <Text>Refeições</Text>
      <Button title='Nova refeição' icon='add' type='PRIMARY'/>
    </Container>
  );
}


