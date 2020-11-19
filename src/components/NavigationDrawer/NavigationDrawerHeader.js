import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button, Menu } from 'react-native-paper';
import assets from '../../assets';
import styles from './styles';

const NavigationDrawerHeader = ({ emails }) => {
  const [visible, setEmailListVisible] = useState(false);
  const [selectEmail, setSelectEmail] = useState(emails[0]);

  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.headerLogo} />
        <TouchableWithoutFeedback
          onPress={() => {
            setEmailListVisible(true);
          }}>
          <View style={styles.headerEmailLayout}>
            <Text style={styles.headerEmail}>{selectEmail}</Text>
            <Image
              source={assets.images.icDropDown}
              style={styles.headerEmailDropDown}
            />
          </View>
        </TouchableWithoutFeedback>
        <Menu
          visible={visible}
          onDismiss={() => {
            setEmailListVisible(false);
          }}
          anchor={<Button />}>
          {emails.map((email) => {
            return (
              <Menu.Item
                key={email}
                onPress={() => {
                  setEmailListVisible(false);
                  setSelectEmail(email);
                }}
                title={email}
              />
            );
          })}
        </Menu>
      </View>
    </View>
  );
};

export default NavigationDrawerHeader;
