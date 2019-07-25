import React, { Fragment } from 'react';
import CharactersList from 'components/CharactersList';
import CharacterInfo from 'components/CharacterInfo';
import About from 'components/About';
import AddComment from 'components/AddComment';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const NavStack = createStackNavigator(
  {
    Home: { screen: CharactersList },
    Info: { screen: CharacterInfo }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0066cc',
        color: '#fff'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

const Nav = createAppContainer(NavStack);

const TabsStack = createBottomTabNavigator(
  {
    Characters: { screen: Nav },
    About: { screen: About }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => {
          const route = navigation.state.routeName;
          const name = {
            Characters: 'users',
            About: 'fort-awesome'
          }[route];
          return <Icon name={name} color={tintColor} size={22} />;
        },
        tabBarOptions: {
          activeBackgroundColor: '#E6F0FA'
        }
      };
    }
  }
);

const Tabs = createAppContainer(TabsStack);

const ModalStack = createStackNavigator(
  {
    Tabs: { screen: Tabs },
    AddComment: { screen: AddComment }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const Modal = createAppContainer(ModalStack);

export default Modal;
