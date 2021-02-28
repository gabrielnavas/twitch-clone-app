import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import Following from './screens/Following';
import ComingSoon from './screens/ComingSoon';
import colors from './styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const tabBarIconComponentFollowing: ((props: {
  focused: boolean;
  color: string;
  size: number;
}) => React.ReactNode) = ({ size, focused }) => {
  return (
    <Ionicons
      name='md-heart'
      size={size}
      color={focused ? colors.purple : colors.black}
    />
  )
}

const tabBarIconComponentDiscover: ((props: {
  focused: boolean;
  color: string;
  size: number;
}) => React.ReactNode) = ({ size, focused }) => {
  return (
    <MaterialCommunityIcons
      name='compass-outline'
      size={size}
      color={focused ? colors.purple : colors.black}
    />
  )
}

const tabBarIconComponentBrowse: ((props: {
  focused: boolean;
  color: string;
  size: number;
}) => React.ReactNode) = ({ size, focused }) => {
  return (
    <Ionicons
      name='md-browsers'
      size={size}
      color={focused ? colors.purple : colors.black}
    />
  )
}

const tabBarIconComponentEsports: ((props: {
  focused: boolean;
  color: string;
  size: number;
}) => React.ReactNode) = ({ size, focused }) => {
  return (
    <MaterialCommunityIcons
      name='trophy-outline'
      size={size}
      color={focused ? colors.purple : colors.black}
    />
  )
}

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator 
      initialRouteName='Following'
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          marginTop: 5 
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.purple,
      }}
    >
      <Screen name="Following" component={Following} options={{
        tabBarIcon: tabBarIconComponentFollowing
      }} />
      <Screen name="Discover" component={ComingSoon} options={{
        tabBarIcon: tabBarIconComponentDiscover
      }} />
      <Screen name="Browse" component={View} options={{
        tabBarIcon: tabBarIconComponentBrowse
      }} />
      <Screen name="Esports" component={View} options={{
        tabBarIcon: tabBarIconComponentEsports
      }} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
