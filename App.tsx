import { Home } from '@screens/Home';
import { useFonts, NunitoSans_700Bold, NunitoSans_400Regular } from '@expo-google-fonts/nunito-sans'
import theme from './src/theme'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native';
import { Loading } from '@components/Loading';
import { Statistics } from '@screens/Statistics';
import { NewMeal } from '@screens/NewMeal';
import { DietSuccessScreen } from '@screens/DietSuccessScreen';
import { DietFailureScreen } from '@screens/DietFailureScreen';
import { DietDetails } from '@screens/DietDetails';


export default function App() {

  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <DietDetails/> : <Loading/>}

    </ThemeProvider>
  );
}
