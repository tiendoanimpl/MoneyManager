import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import assets from '../assets';
import NavigationDrawer from '../components/NavigationDrawer';
import screenNames from '../config/screenNames';
import ExpenseScreen from './expense';
import HomeScreen from './home';
import MoneyDetailScreen from './MoneyDetail';

const Drawer = createDrawerNavigator();

const Screen = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={screenNames.home}
        drawerContent={(props) => (
          <NavigationDrawer
            menuItems={[
              {
                id: screenNames.home,
                name: screenNames.home,
                activeIcon: assets.images.icActiveStatistic,
                inactiveIcon: assets.images.icInactiveStatistic,
              },
              {
                id: screenNames.moneyDetail,
                name: screenNames.moneyDetail,
                activeIcon: assets.images.icActiveDetail,
                inactiveIcon: assets.images.icInactiveDetail,
              },
            ]}
            //fake
            emails={[
              'kiraoffuture@gmail.com',
              'kiraoffuture1@gmail.com',
              'kiraoffuture2@gmail.com',
            ]}
            {...props}
          />
        )}>
        <Drawer.Screen name={screenNames.home} component={HomeScreen} />
        <Drawer.Screen name={screenNames.expense} component={ExpenseScreen} />
        <Drawer.Screen
          name={screenNames.moneyDetail}
          component={MoneyDetailScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Screen;
