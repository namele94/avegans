import React from 'react';
import {StyleSheet, View} from 'react-native';
import COLORS from '../styles/colors.ts';

interface MyImageBgProps {
  children?: React.ReactNode;
  isLoader?: boolean;
}

const MyImageBg = (props: MyImageBgProps) => {
  return <View style={styles.backgroundImage}>{props.children}</View>;
};

export default MyImageBg;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
