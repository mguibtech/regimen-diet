import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DietDetails } from '@screens/DietDetails';
import { DietFailureScreen } from '@screens/DietFailureScreen';
import { DietSuccessScreen } from '@screens/DietSuccessScreen';
import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='home'
                component={Home}
            />

            <Screen
                name='new'
                component={NewMeal}
            />

            <Screen
                name='statistics'
                component={Statistics}
            />

            <Screen
                name='details'
                component={DietDetails}
            />

            <Screen
                name='successDiet'
                component={DietSuccessScreen}
            />

            <Screen
                name='failureDiet'
                component={DietFailureScreen}
            />
        </Navigator>
    )
}