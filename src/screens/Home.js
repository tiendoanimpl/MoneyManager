import React from 'react';
import {Button, Text, View} from 'react-native';
import screenNames from '../config/screenNames';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate(screenNames.expense)}
        title="Goto expense"
      />
    </View>
  );
};

export default HomeScreen;
