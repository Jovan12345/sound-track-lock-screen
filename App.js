import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import VideosScreen from './src/screens/VideosScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <FontAwesome name="home" size={20} />
            )
          }}
        />
        <Tab.Screen
          name="Videos"
          component={VideosScreen}

        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
