import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/MyImageBg.tsx';
import CartButton from '../components/CartButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../stores/StoreContext.tsx';
import FastImage from 'react-native-fast-image';

interface MenuScreenProps {
  navigation: any;
}

const MenuScreen: React.FC<MenuScreenProps> = props => {
  const {avatarUrl, name, birthDate} = useStore().productStore;
  const {navigation} = props;

  function navToEdit() {
    navigation.navigate('ProfileEdit');
  }

  return (
    <MyImageBg>
      <SafeAreaView edges={['right', 'left']} style={styles.mainContainer}>
        <View style={styles.menuContainer}>
          <View style={styles.titleContainer}>
            <FastImage
              source={{
                uri: avatarUrl,
              }}
              style={{width: 140, height: 140, borderRadius: 100}}
              resizeMode={'cover'}
            />
            <View style={{width: '50%'}}>
              <View style={styles.profileTitleContainer}>
                <Text style={styles.profileTitle}>{name}</Text>
              </View>
              <View style={styles.profileTitleContainer}>
                <Text style={styles.profileTitle}>{birthDate}</Text>
              </View>
            </View>
          </View>
          <Pressable onPress={navToEdit} style={styles.editBtn}>
            <Text>Edit</Text>
          </Pressable>
          <ItemButton title={'Menu'} targetScreen={'Shop'} />
          <ItemButton title={'Reservation'} targetScreen={'Reservation'} />
          <ItemButton title={'Contacts'} targetScreen={'Contacts'} />
          <ItemButton title={'Bonus program'} targetScreen={'Bonuses'} />
        </View>
        <View style={{paddingBottom: 80, alignSelf: 'center'}}>
          <CartButton iconSize={76} />
        </View>
      </SafeAreaView>
    </MyImageBg>
  );
};

const ItemButton = ({
  title,
  targetScreen,
  bgColor,
}: {
  title: string;
  targetScreen: string;
  bgColor?: string;
}) => {
  const navigation: any = useNavigation();
  return (
    <Pressable
      style={[styles.menuItem, {backgroundColor: bgColor ?? COLORS.white}]}
      onPress={() => navigation.navigate(targetScreen)}>
      <Text style={styles.menuText}>{title}</Text>
      <Image source={require('../assets/right.png')} />
    </Pressable>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 1,
    color: COLORS.white,
    textAlign: 'center',
  },
  menuContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: width * 0.9,
    borderRadius: 12,
    marginBottom: 25,
  },
  menuText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 22,
    textAlign: 'center',
  },
  icon: {
    width: 90,
    height: 90,
  },
  iconContainer: {
    alignItems: 'flex-end',
    marginBottom: 60,
    marginRight: 20,
  },
  counter: {
    backgroundColor: COLORS.secondary,
    padding: 3,
    paddingHorizontal: 7,
    borderRadius: 100,
    position: 'relative',
    bottom: width * 0.08,
    right: 5,
  },
  counterText: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '600',
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  profileTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  profileTitleContainer: {
    backgroundColor: COLORS.transparentBg,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  editBtn: {
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 12,
    marginBottom: 30,
    alignSelf: 'flex-end',
  },
});

export default observer(MenuScreen);
