import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton.tsx';
import COLORS from '../styles/colors.ts';
import MyImageBg from '../components/MyImageBg.tsx';
import QRCode from 'react-native-qrcode-svg';
import {BORDER_RADIUS} from '../styles/constants.ts';
import LinearView from '../components/LinearView.tsx';

const qrCodeValue = 'https://www.google.com';

const ReservationSuccessScreen = ({navigation}: any) => {
  const navToMain = () => {
    navigation.navigate('Menu');
  };

  return (
    <MyImageBg>
      <SafeAreaView edges={['top']} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Image
              source={require('../assets/success.png')}
              style={{width: 287, height: 287}}
            />
            <Text style={styles.title}>
              {'Done!\nYou have successfully booked'}
            </Text>
          </View>
        </View>
        <View style={styles.linearContainer}>
          <CustomButton
            onPress={navToMain}
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
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: COLORS.white,
    marginTop: 20,
    marginBottom: 40,
  },
  icon: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    marginBottom: 40,
    marginTop: 10,
  },
  contentContainer: {
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  linearContainer: {
    alignItems: 'center',
  },
});

export default ReservationSuccessScreen;
