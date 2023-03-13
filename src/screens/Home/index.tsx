import { Header } from '@components/Header';
import { StyleSheet, Text, View } from 'react-native';
import { 
  Container, 
  HeaderHome,  
  Logo, 

  User, 
} from './styles';
import logoImg from '@assets/logo.png';
import userImg from '@assets/user.png'
import { Percent } from '@components/Percent';



export function Home() {
  return (
    <Container>
      
      <HeaderHome>
        <Logo source={logoImg} />
        <User  source={userImg}/>
      </HeaderHome>

      <Percent type='SECONDARY'/>
    </Container>
  );
}


