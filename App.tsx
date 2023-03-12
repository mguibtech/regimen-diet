import { Home } from '@screens/Home';
import { useFonts, NunitoSans_700Bold, NunitoSans_400Regular } from '@expo-google-fonts/nunito-sans'
import theme from './src/theme'
import { ThemeProvider } from 'styled-components'
import { ActivityIndicator } from 'react-native'
import { Loading } from '@components/Loading';


export default function App() {

  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <ThemeProvider theme={theme}>

      {fontsLoaded ? <Home/> : <Loading/>}

    </ThemeProvider>
  );
}
