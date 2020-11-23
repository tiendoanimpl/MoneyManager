import React, {useState} from 'react';
import {
  Image,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import assets from '../../assets';

const Expense = (props) => {
  const [reason, setReason] = useState(true);
  const [level, setLevel] = useState(true);
  const selectBoxStyle = {
    height: 56,
    width: 230,
    marginStart: 21,
    fontSize: 24,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingStart: 16,
  };
  const label = {
    fontSize: 24,
  };
  const styles = StyleSheet.create({
    mainView: {
      marginTop: 20,
      marginStart: 16,
      marginEnd: 16,
    },
    moneyInputLayout: {
      flexDirection: 'row',
      marginTop: 56,
      alignItems: 'center',
      justifyContent: 'center',
    },
    moneyInputUnit: {
      alignSelf: 'flex-end',
      fontSize: 32,
    },
    reasonLayout: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 29,
    },
    anotherLayout: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
      marginStart: 5,
    },
    partView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      ...label,
    },
    moneyInput: {
      height: 60,
      width: 150,
      fontSize: 32,
      textAlign: 'center',
      color: 'black',
      marginStart: 15,
      marginEnd: 15,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
    },
    selectBox: selectBoxStyle,
    anotherInput: {
      height: 100,
      width: 270,
      marginStart: 33,
      borderRadius: 10,
      borderColor: '#500000',
      borderWidth: 1,
    },
    timeLayout: {
      flexDirection: 'row',
      alignItems: 'center',
      marginStart: 5,
      marginTop: 16,
    },
    levelLayout: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
      justifyContent: 'space-around',
    },
    saveButton: {
      height: 56,
      backgroundColor: '#500000',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginTop: 16,
    },
    levelSelectBox: {
      ...selectBoxStyle,
      marginStart: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 24,
    },
    reasonAddIcon: {
      marginStart: 13,
    },
    levelAddIcon: {
      marginStart: 13,
    },
    timeLabel: {
      ...label,
      marginStart: 13,
    },
  });

  return (
    <View style={styles.mainView}>
      {/* line1 */}
      <View style={styles.moneyInputLayout}>
        <TextInput
          style={styles.moneyInput}
          keyboardType="numeric"
          placeholder="Số tiền"
        />
        <Text style={styles.moneyInputUnit}>đ</Text>
      </View>

      {/* line2 */}
      <View style={styles.reasonLayout}>
        <Text style={styles.label}>Lý do</Text>
        <View style={styles.selectBox}>
          <Picker
            selectedValue={reason}
            onValueChange={(value) => {
              setReason(value);
            }}>
            <Picker.Item label="Mua bột giặt" value="Mua bột giặt" />
            <Picker.Item label="Nấu cơm" value="Nấu cơm" />
          </Picker>
        </View>
        <Image source={assets.images.icAdd} style={styles.reasonAddIcon} />
      </View>

      {/* line3 */}
      <View style={styles.anotherLayout}>
        <Text style={styles.label}>Khác</Text>
        <TextInput style={styles.anotherInput} />
      </View>

      {/* line4 */}
      <View style={styles.timeLayout}>
        <Text style={styles.label}>Thời gian</Text>
        <Text style={[styles.timeLabel]}>22:00:11 12/9/2019</Text>
      </View>

      {/* line5 */}
      <View style={styles.levelLayout}>
        <Text style={styles.label}>Cấp độ</Text>
        <View style={styles.levelSelectBox}>
          <Picker selectedValue={level}>
            <Picker.Item label="Bình thường" value="Bình thường" />
            <Picker.Item label="Khó" value="Khó" />
          </Picker>
        </View>
        <Image source={assets.images.icAdd} style={styles.levelAddIcon} />
      </View>

      {/* line6 */}
      <TouchableHighlight style={[styles.saveButton]}>
        <View>
          <Text style={styles.buttonText}>Lưu lại</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Expense;
