import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import styles from './styles';

const NavigationDrawerMenuItem = ({
  navigation,
  item,
  currentSelectedMenuItem,
  postSelectItem,
  ...props
}) => {
  return (
    <TouchableHighlight
      underlayColor={colors.menu.underlay}
      onPress={() => {
        postSelectItem(item.id);
        navigation.navigate(item.name);
      }}>
      <View style={styles.menuItem}>
        <Image
          source={
            currentSelectedMenuItem === item.id
              ? item.activeIcon
              : item.inactiveIcon
          }
        />
        <Text
          style={
            currentSelectedMenuItem === item.id
              ? styles.menuItemTextActive
              : styles.menuItemTextInActive
          }>
          {item.name}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default NavigationDrawerMenuItem;
