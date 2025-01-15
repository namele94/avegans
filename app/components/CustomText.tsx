import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomText = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.strikethrough} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start', // Линия ограничивается размером текста
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  strikethrough: {
    position: 'absolute',
    width: '120%',
    height: 1,
    backgroundColor: 'gray',
    transform: [{ rotate: '-30deg' }],
    top: '50%',
    left: 0,
  },
});

export default CustomText;
