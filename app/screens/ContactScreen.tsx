import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/MyImageBg.tsx';
import MaskInput from 'react-native-mask-input';
import CustomButton from '../components/CustomButton.tsx';

const dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];
const ContactScreen = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('Menu');
  };

  return (
    <MyImageBg>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <Text style={styles.topTitle}>665 Monroe Ave, Elizabeth, NJ 07201</Text>
        <Formik
          initialValues={{
            phone: '',
            address: '',
            date: '',
            index: '',
          }}
          onSubmit={handleSubmit}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <View style={styles.formContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Number</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter phone"
                    placeholderTextColor={COLORS.grayText}
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Address</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter address"
                    placeholderTextColor={COLORS.grayText}
                    value={values.address}
                    onChangeText={handleChange('address')}
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Date</Text>
                <View style={styles.inputContainer}>
                  <MaskInput
                    mask={dateMask}
                    placeholder="DD.MM.YYYY"
                    style={styles.input}
                    placeholderTextColor={COLORS.grayText}
                    value={values.date}
                    onChangeText={handleChange('date')}
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Index</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter index"
                    placeholderTextColor={COLORS.grayText}
                    value={values.index}
                    onChangeText={handleChange('index')}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
        <CustomButton
          containerStyle={styles.buttonContainer}
          onPress={handleSubmit}
          title={'Back to menu'}
        />
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
    marginVertical: 20,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    padding: 15,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  messageInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  headerText: {
    fontSize: 40,
    fontWeight: '900',
    color: COLORS.white,
    marginLeft: 20,
    marginVertical: 20,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 6,
    borderRadius: 12,
    paddingHorizontal: 8,
  },
  inputContainer: {
    height: 45,
    borderRadius: 12,
    overflow: 'hidden',
    paddingHorizontal: 10,
    backgroundColor: COLORS.transparentBg,
  },
  input: {
    flex: 1,
    color: COLORS.black,
    paddingHorizontal: 20,
  },
  topTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: COLORS.white,
    marginLeft: 20,
  },
});

export default ContactScreen;
