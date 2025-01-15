import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import COLORS from '../../styles/colors.ts';
import CustomButton from '../../components/CustomButton.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../../components/MyImageBg.tsx';
import {useStore} from '../../stores/StoreContext.tsx';
import {CartItem} from '../../stores/ProductStore.ts';
import LinearView from '../../components/LinearView.tsx';
import {BORDER_RADIUS} from '../../styles/constants.ts';

function generateOrderSummary(cartItems: CartItem[]) {
  const itemsText = cartItems
    .map(
      (item: any) =>
        `${item.name} - ${item.quantity} шт. - $${item.price * item.quantity}`,
    )
    .join('\n');

  return `${itemsText}`;
}

const ConfirmOrderScreen = ({navigation}: any) => {
  const {productStore} = useStore();
  const {cart, clearCart} = productStore;

  const qrCodeValue = generateOrderSummary(cart);

  function navigateToMenu() {
    navigation.navigate('Menu');
    clearCart();
  }

  return (
    <MyImageBg>
      <SafeAreaView edges={['top']} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.successText}>
              {'Done!\nWe have your order'}
            </Text>

            <View style={styles.qrContainer}>
              <QRCode
                backgroundColor={'transparent'}
                value={qrCodeValue}
                size={180}
                color={COLORS.white}
              />
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <CustomButton
            onPress={navigateToMenu}
            title={'Back to menu'}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </SafeAreaView>
    </MyImageBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  successText: {
    marginTop: 20,
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 32,
  },
  qrContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#5C0DAC',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    position: 'absolute',
    bottom: 40,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 40,
    marginTop: 10,
  },
  icon: {
    width: 220,
    height: 220,
  },
  contentContainer: {
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});

export default ConfirmOrderScreen;
