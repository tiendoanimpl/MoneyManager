import React, { useState } from 'react';
import { View } from 'react-native';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import NavigationDrawerMenuItem from './NavigationDrawerMenuItem';
import styles from './styles';

function NavigationDrawer({ menuItems, emails, ...props }) {
  const [currentSelectedMenuItem, setSelectMenuItem] = useState(
    menuItems[0].id,
  );

  return (
    <View>
      {/* header */}
      <NavigationDrawerHeader emails={emails} />

      {/* Menu */}
      <View style={styles.menu}>
        {menuItems.map((item) => {
          return (
            <NavigationDrawerMenuItem
              key={item.id}
              navigation={props.navigation}
              item={item}
              currentSelectedMenuItem={currentSelectedMenuItem}
              postSelectItem={(id) => {
                setSelectMenuItem(id);
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

export default NavigationDrawer;
