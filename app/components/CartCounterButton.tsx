import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../styles/colors';

interface HorizontalCounterProps {
  value: number;
  plus: () => void;
  minus: () => void;
}

const CartCounterButton: React.FC<HorizontalCounterProps> = ({
  value = 0,
  plus,
  minus,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLeft} onPress={plus}>
          <Image source={require('../assets/up.png')} />
        </TouchableOpacity>
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>{value}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={minus}>
          <Image source={require('../assets/down.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {},
  button: {},
  valueContainer: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    color: COLORS.black,
    fontWeight: '300',
  },
  buttonLeft: {},
  leftBtnText: {
    color: COLORS.black,
  },
});

export default CartCounterButton;
