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
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import createReduxStore from './src/core/store/createStore';

const Stack = createStackNavigator();
const store = createReduxStore();

const images = [
  require("./assets/icons/arrow.png"),
  require("./assets/icons/back.png"),
  require("./assets/icons/cam.png"),
  require("./assets/icons/check.png"),
  require("./assets/icons/close.png"),
  require("./assets/icons/email.png"),
  require("./assets/icons/error.png"),
  require("./assets/icons/icon1.png"),
  require("./assets/icons/icon2.png"),
  require("./assets/icons/icon3.png"),
  require("./assets/icons/img.png"),
  require("./assets/icons/left.png"),
  require("./assets/icons/logo.png"),
  require("./assets/icons/logo_icon.png"),
  require("./assets/icons/nav.png"),
  require("./assets/icons/one.png"),
  require("./assets/icons/plane.png"),
  require("./assets/icons/play.png"),
  require("./assets/icons/question.png"),
  require("./assets/icons/right.png"),
  require("./assets/icons/sadly.png"),
  require("./assets/icons/smile.png"),
  require("./assets/icons/three.png"),
  require("./assets/icons/two.png"),
  require("./assets/icons/upload.png"),
  require("./assets/icons/wallet.png"),
];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  handleResourcesAsync = async () => {
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render(){
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }
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
}