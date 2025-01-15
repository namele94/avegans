import React, {ReactNode} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MyImageBg from './MyImageBg.tsx';
import CartButton from './CartButton.tsx';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../styles/colors.ts';
import Dropdown from './Dropdown.tsx';

const CustomHeader = ({
  title,
  rightItem,
  centerItem,
}: {
  title: string;
  rightItem?: ReactNode;
  centerItem?: ReactNode;
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable style={styles.backButton} onPress={navigation.goBack}>
            <Image
              source={require('../assets/back.png')}
              style={styles.backIcon}
            />
          </Pressable>

          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        {centerItem}
        <View style={styles.cartContainer}>
          {rightItem ?? <CartButton iconSize={52} />}
        </View>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    width: width,
    height: width * 0.3,
    justifyContent: 'flex-end',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
  },
  backIcon: {
    width: 52,
    height: 52,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 30,
  },
  cartContainer: {
    position: 'relative',
  },
  cartButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FF00FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 18,
    height: 18,
    backgroundColor: 'orange',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
