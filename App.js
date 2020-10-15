import React, {Component} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  Picker,
  StyleSheet,
  Button,
  TouchableHighlight,
} from 'react-native';

export default class Expense extends Component {
  state = {
    reason: '',
    level: '',
  };

  render() {
    return (
      <View style={this.styles.mainView}>
        {/* line1 */}
        <View style={[this.styles.partView, {marginTop: 56}]}>
          <TextInput
            style={this.styles.moneyInput}
            keyboardType="numeric"
            placeholder="Số tiền"></TextInput>
          <Text style={{fontSize: 32}}>đ</Text>
        </View>
        {/* line2 */}
        <View style={[this.styles.partView, {marginTop: 29}]}>
          <Text style={this.styles.label}>Lý do</Text>
          <View style={this.styles.selectBox}>
            <Picker
              selectedValue={this.state.reason}
              onValueChange={(value) => {
                this.setState({
                  reason: value,
                });
              }}>
              <Picker.Item label="Mua bột giặt" value="Mua bột giặt" />
              <Picker.Item label="Nấu cơm" value="Nấu cơm" />
            </Picker>
          </View>
          <Image
            source={require('./images/add.png')}
            style={{
              marginStart: 13,
            }}></Image>
        </View>
        {/* line3 */}
        <View style={[this.styles.partView, {marginTop: 16}]}>
          <Text style={this.styles.label}>Khác</Text>
          <TextInput style={this.styles.anotherInput}></TextInput>
        </View>
        {/* line4 */}
        <View style={[this.styles.partView, {marginTop: 16}]}>
          <Text style={this.styles.label}>Thời gian</Text>
          <Text style={[this.styles.label, {marginStart: 14}]}>
            22:00:11 12/9/2019
          </Text>
        </View>
        {/* line5 */}
        <View style={[this.styles.partView, {marginTop: 16}]}>
          <Text style={this.styles.label}>Cấp độ</Text>
          <View style={this.styles.selectBox}>
            <Picker
              selectedValue={this.state.level}
              onValueChange={(value) => {
                this.setState({
                  level: value,
                });
              }}>
              <Picker.Item label="Bình thường" value="Bình thường" />
              <Picker.Item label="Khó" value="Khó" />
            </Picker>
          </View>
          <Image
            source={require('./images/add.png')}
            style={{
              marginStart: 13,
            }}></Image>
        </View>
        {/* line6 */}
        <TouchableHighlight style={[this.styles.button, {marginTop: 16}]}>
          <View>
            <Text style={this.styles.buttonText}>Lưu lại</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  styles = StyleSheet.create({
    mainView: {
      marginTop: 50,
      marginStart: 16,
      marginEnd: 16,
    },
    partView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: 24,
    },
    moneyInput: {
      height: 60,
      width: 200,
      borderWidth: 1,
      borderColor: 'gray',
      fontSize: 32,
      textAlign: 'center',
      color: 'black',
    },
    selectBox: {
      height: 56,
      width: 200,
      marginStart: 21,
      fontSize: 24,
      textAlign: 'center',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      paddingStart: 16,
    },
    anotherInput: {
      height: 100,
      width: 230,
      marginStart: 33,
      borderRadius: 10,
      borderColor: '#500000',
      borderWidth: 1,
    },
    button: {
      height: 56,
      backgroundColor: '#500000',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 24,
    },
  });
}
