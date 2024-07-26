import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import LocateScreen from './screens/Locate';
import RainScreen from './screens/Rain';
import UpdateScreen from './screens/Updates';

const Stack = createStackNavigator();

function App() {

  return(

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false 
    }}> 
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Locate" component={LocateScreen} />
      <Stack.Screen name="Rain" component={RainScreen} /> 
      <Stack.Screen name="Updates" component={UpdateScreen} /> 
    </Stack.Navigator> 
  </NavigationContainer>
  
  );

}

export default App;