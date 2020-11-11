import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import screenNames from '../config/screenNames';
import ExpenseScreen from './Expense';
import HomeScreen from './Home';

const Stack = createStackNavigator();

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screenNames.home} component={HomeScreen} />
        <Stack.Screen name={screenNames.expense} component={ExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
