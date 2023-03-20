import { Header } from '@components/Header';
import {
  Container,
  HeaderHome,
  Logo,
  Text,
  TitleSection,
  User,
} from './styles';
import logoImg from '@assets/logo.png';
import userImg from '@assets/user.png'
import { Percent } from '@components/Percent';
import { Button } from '@components/Button';
import { Snack } from '@components/Snack';

import { SectionList } from 'react-native';
import { View } from 'react-native';

export function Home() {

  const DATA = [
    {
      title: '12.08.22',
      data: [
        { hour: "03:50", meal: 'Açaí', mealStatus: true},
        { hour: "02:50", meal: 'X-Tudo', mealStatus: false},
        { hour: "01:50", meal: 'Salada', mealStatus: true },
        { hour: "03:00", meal: 'Ice Cream', mealStatus: true  },
      ],
    },
    {
      title: '11.08.22',
      data: [
        { hour: "03:50", meal: 'Frango', mealStatus: false },
        { hour: "02:50", meal: 'Sardinha', mealStatus: true },
        { hour: "01:50", meal: 'Salada', mealStatus: true },
        { hour: "03:00", meal: 'Biscoito', mealStatus: false },
      ],
    },
    {
      title: '11.08.22',
      data: [
        { hour: "03:50", meal: 'Açaí', mealStatus: false },
        { hour: "02:50", meal: 'X-Tudo' , mealStatus: true},
        { hour: "01:50", meal: 'Salada', mealStatus: false },
        { hour: "03:00", meal: 'Ice Cream', mealStatus: true },
      ],
    },
    {
      title: '11.08.22',
      data: [
        { hour: "03:50", meal: 'Frango', mealStatus: true },
        { hour: "02:50", meal: 'Sardinha', mealStatus: false },
        { hour: "01:50", meal: 'Salada', mealStatus: false },
        { hour: "03:00", meal: 'Biscoito', mealStatus: true },
      ]
    },
  ];

  return (
    <Container>

      <HeaderHome>
        <Logo source={logoImg} />
        <User source={userImg} />
      </HeaderHome>

      <Percent icon='arrow-up-right' type='PRIMARY' />

      <Text>Refeições</Text>
      <Button title='Nova refeição' icon='add' type='PRIMARY' />

      <View style={{marginTop: 10}}>
        <SectionList
          sections={DATA}
          // keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Snack 
              hour={item.hour} 
              title={item.meal}
              status={item.mealStatus}
              />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <TitleSection>{title}</TitleSection>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            {paddingBottom: 500},
            DATA.length === 0 && {flex: 1}
          ]}
        />
      </View>

    </Container>
  );
}


