import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from './TelaLogin/LoginScreen'
import HomeScreen from './Home/HomeScreen'
import VooScreen from './InfoVoo/VooScreen'
import HotelScreen from './InfoHotel/HotelScreen'
import PacoteScreen from './InfoPacote/PacoteScreen'

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="TelaLogin" headerMode="none">
        <Stack.Screen name="TelaLogin" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InfoVoo" component={VooScreen} />
        <Stack.Screen name="InfoHotel" component={HotelScreen} />
        <Stack.Screen name="InfoPacote" component={PacoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}