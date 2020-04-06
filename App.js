import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/screens/LoginPage';
import CheckLoginPage from './src/screens/CheckLoginPage';
import AboutPage from './src/screens/AboutPage';
import SmilePage from './src/screens/SmilePage';
import SadPage from './src/screens/SadPage';
import Header from './src/components/Header';

import createReduxStore from './src/core/store/createStore';

const Stack = createStackNavigator();
const store = createReduxStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#ff1944" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="CheckLoginPage" component={CheckLoginPage} />
          <Stack.Screen name="AboutPage" component={AboutPage} />
          <Stack.Screen name="SmilePage" component={SmilePage} />
          <Stack.Screen name="SadPage" component={SadPage} />
          <Stack.Screen name="Header" component={Header} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
