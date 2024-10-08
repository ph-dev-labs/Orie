import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack'; // Import transition presets
import Blank from './src/screens/Blank';
import LogoScreen from './src/screens/LogoScreen';
import Choice from './src/screens/Choice';
import MobileReg from './src/screens/MobileReg'
import EmailReg from './src/screens/EmailReg';
import Verification from './src/screens/Verification';
import CreatePassword from './src/screens/CreatePassword';
import { navigationRef } from './src/Navigation/Navigation';
import Login from './src/screens/Login';
import Emailresp from './src/screens/Emailresp';
import Verificationresp from './src/screens/Verificationresp';
import ResetPasswod from './src/screens/ResetPasswod';
import BuyerHome from './src/screens/Buyers-interface/BuyerHome';
import Searchscreen from './src/screens/Searchscreen';
import SearchProduct from './src/screens/Buyers-interface/SearchProduct';



const Stack = createNativeStackNavigator();

export default function Main() {


  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.FadeInFromBottom, // Use the fade transition
        }}
      >
        <Stack.Screen
          name="Blank"
          component={Blank}
        />
        <Stack.Screen
          name="Logo-Screen"
          component={LogoScreen}
        />
         <Stack.Screen
          name="Choice-Screen"
          component={Choice}
        />
         <Stack.Screen
          name="Register-mobile"
          component={MobileReg}
        />
         <Stack.Screen
          name="Register-email"
          component={EmailReg}
        />
         <Stack.Screen
          name="Verification"
          component={Verification}
        />
        
        <Stack.Screen
          name="Create-Password"
          component={CreatePassword}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Email-for-reset-password"
          component={Emailresp}
        />
        <Stack.Screen
          name="Verification-for-reset-password"
          component={Verificationresp}
        />
        <Stack.Screen
          name="create-new-password"
          component={ResetPasswod}
        />
        <Stack.Screen
          name="home"
          component={BuyerHome}
        />
        <Stack.Screen
          name="search"
          component={Searchscreen}
        />
        <Stack.Screen
          name="product-search"
          component={SearchProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
