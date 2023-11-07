import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Detail from '../screen/Detail';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
