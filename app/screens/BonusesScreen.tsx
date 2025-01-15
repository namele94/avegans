import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/MyImageBg.tsx';
import COLORS from '../styles/colors.ts';
import CustomButton from '../components/CustomButton.tsx';
import {observer} from 'mobx-react';
import {useStore} from '../stores/StoreContext.tsx';
import {BORDER_RADIUS} from '../styles/constants.ts';
import Clipboard from '@react-native-clipboard/clipboard';
import QRCode from 'react-native-qrcode-svg';

interface EventScreenProps {
  navigation: any;
}

const BonusesScreen: React.FC<EventScreenProps> = props => {
  const {productStore} = useStore();
  const {orderList} = productStore;

  function navToMenu() {
    props.navigation.navigate('Menu');
  }

  return (
    <MyImageBg>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image
              source={require('../assets/present.png')}
              style={styles.presentIcon}
            />
            <View style={styles.gridContainer}>
              {Array.from({length: 6}).map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.gridItem,
                    index < orderList.length && {backgroundColor: COLORS.black},
                  ]}>
                  {index === 5 ? (
                    <Image
                      source={require('../assets/present.png')}
                      style={styles.giftIcon}
                    />
                  ) : (
                    index < orderList.length && (
                      <Image
                        source={require('../assets/check.png')}
                        style={styles.checkIcon}
                      />
                    )
                  )}
                </View>
              ))}
            </View>
          </View>
          <Text style={styles.aboutText}>
            When ordering five dishes, 6 as a gift Thank you for using us!
          </Text>
        </View>
        <CustomButton
          containerStyle={styles.button}
          title={'Back to menu'}
          onPress={navToMenu}
        />
      </SafeAreaView>
    </MyImageBg>
  );
};

export default observer(BonusesScreen);

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  cardContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 20,
  },
  cardTitle: {
    color: COLORS.white,
    fontWeight: 700,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  aboutText: {
    color: COLORS.white,
    fontWeight: '500',
    marginHorizontal: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  itemContainer: {
    marginHorizontal: 20,
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemSubTitle: {
    color: COLORS.grayText,
    marginVertical: 10,
  },
  listTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 40,
    marginLeft: 20,
  },
  modalButton: {
    marginBottom: 10,
    width: '100%',
  },
  inputContainer: {
    height: 55,
    width: '100%',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.primary,
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  invalidCode: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 4,
    color: COLORS.error,
  },
  input: {
    flex: 1,
    color: COLORS.white,
    paddingHorizontal: 20,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayText,
    margin: 8,
  },
  refContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS,
    width: '90%',
    backgroundColor: COLORS.white,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  close: {
    width: 16,
    height: 16,
  },
  refText: {
    width: '92%',
  },
  button: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  topContainer: {
    alignItems: 'center',
  },
  presentIcon: {
    width: 198,
    height: 198,
  },
  presentItemContainer: {
    backgroundColor: COLORS.transparentBg,
    width: 115,
    height: 122,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    gap: 10,
  },
  gridItem: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.transparentBg,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 40,
    height: 40,
    tintColor: COLORS.white,
    resizeMode: 'contain',
  },
  giftIcon: {
    width: 70,
    height: 70,
    tintColor: COLORS.primary,
  },
});
