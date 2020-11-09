import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  Picker,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const Expense = (props) => {
  const [reason, setReason] = useState(true);
  const [level, setLevel] = useState(true);
  const styles = StyleSheet.create({
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
      width: 150,
      fontSize: 32,
      textAlign: 'center',
      color: 'black',
      marginStart: 15,
      marginEnd: 15,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
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
    marginTop16: {
      marginTop: 16,
    },
    marginTop56: {
      marginTop: 56,
    },
    marginStart13: {
      marginStart: 13,
    },
    marginTop29: {
      marginTop: 29,
    },
    fontSize32: {
      fontSize: 32,
    },
  });

  return (
    <View style={styles.mainView}>
      {/* line1 */}
      <View style={[styles.partView, styles.marginTop56]}>
        <TextInput
          style={styles.moneyInput}
          keyboardType="numeric"
          placeholder="Số tiền"
        />
        <Text style={styles.fontSize32}>đ</Text>
      </View>
      {/* line2 */}
      <View style={[styles.partView, styles.marginTop29]}>
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
        <Image
          source={require('./images/add.png')}
          style={styles.marginStart13}
        />
      </View>
      {/* line3 */}
      <View style={[styles.partView, styles.marginTop16]}>
        <Text style={styles.label}>Khác</Text>
        <TextInput style={styles.anotherInput} />
      </View>
      {/* line4 */}
      <View style={[styles.partView, styles.marginTop16]}>
        <Text style={styles.label}>Thời gian</Text>
        <Text style={[styles.label, styles.marginStart13]}>
          22:00:11 12/9/2019
        </Text>
      </View>
      {/* line5 */}
      <View style={[styles.partView, styles.marginTop16]}>
        <Text style={styles.label}>Cấp độ</Text>
        <View style={styles.selectBox}>
          <Picker
            selectedValue={level}
            onValueChange={(value) => {
              setLevel(value);
            }}>
            <Picker.Item label="Bình thường" value="Bình thường" />
            <Picker.Item label="Khó" value="Khó" />
          </Picker>
        </View>
        <Image
          source={require('./images/add.png')}
          style={styles.marginStart13}
        />
      </View>
      {/* line6 */}
      <TouchableHighlight style={[styles.button, styles.marginTop16]}>
        <View>
          <Text style={styles.buttonText}>Lưu lại</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Expense;
