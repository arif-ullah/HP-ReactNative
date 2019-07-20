import React, { Fragment } from 'react';
import CharactersList from 'components/CharactersList';
import CharacterInfo from 'components/CharacterInfo';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: { screen: CharactersList },
  Info: { screen: CharacterInfo }
});

const App = createAppContainer(RootStack);

export default App;
