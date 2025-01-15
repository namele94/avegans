import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomButton from '../components/CustomButton';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/MyImageBg.tsx';
import DatePicker from 'react-native-date-picker';
import MaskInput from 'react-native-mask-input';

const ReservationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  table: Yup.string().required('Required'),
  ind: Yup.string().required('Required'),
  date: Yup.string().required('Required'),
});

const ReservationScreen = ({navigation}: any) => {
  const dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];

  const handleSubmit = () => {
    navigation.navigate('ReservationSuccessScreen');
  };

  return (
    <MyImageBg>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            table: '',
            ind: '',
            date: '',
          }}
          validationSchema={ReservationSchema}
          onSubmit={handleSubmit}>
          {({handleChange, handleSubmit, values, setFieldValue, isValid}) => {
            const isFormFilled = Object.values(values).every(
              value => value !== '',
            );

            return (
              <>
                <View style={styles.formContainer}>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Name</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Enter name"
                        placeholderTextColor={COLORS.grayText}
                        value={values.name}
                        onChangeText={handleChange('name')}
                      />
                    </View>
                  </View>

                  <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Phone number</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Enter phone number"
                        placeholderTextColor={COLORS.grayText}
                        value={values.phone}
                        onChangeText={handleChange('phone')}
                        keyboardType="phone-pad"
                      />
                    </View>
                  </View>

                  <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Table number</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Enter table number"
                        placeholderTextColor={COLORS.grayText}
                        value={values.table}
                        onChangeText={handleChange('table')}
                      />
                    </View>
                  </View>

                  <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Indicate time of the visit</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Enter indicate time of the visit"
                        placeholderTextColor={COLORS.grayText}
                        value={values.ind}
                        onChangeText={handleChange('ind')}
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
                </View>
                <View style={styles.buttonContainer}>
                  <CustomButton
                    isDisabled={!isFormFilled && !isValid}
                    title="Next"
                    onPress={handleSubmit}
                  />
                </View>
              </>
            );
          }}
        </Formik>
      </SafeAreaView>
    </MyImageBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
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
    color: COLORS.white,
    paddingHorizontal: 20,
  },
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  tablesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableButton: {
    backgroundColor: COLORS.white,
    padding: 25,
    paddingHorizontal: 28,
    borderRadius: 20,
  },
  tableButtonActive: {
    backgroundColor: COLORS.primary,
  },
  tableButtonText: {
    color: COLORS.black,
    fontWeight: '700',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dateTimePicker: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '49%',
  },
  dateTimeIconContainer: {
    marginRight: 10,
  },
  dateTimeText: {
    color: COLORS.grayText,
    fontSize: 16,
  },
  clockIcon: {},
  calendarIcon: {},
});

export default ReservationScreen;
