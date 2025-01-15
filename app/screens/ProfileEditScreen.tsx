import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Formik} from 'formik';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/MyImageBg.tsx';
import {launchImageLibrary} from 'react-native-image-picker';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import MaskInput from 'react-native-mask-input';

const ProfileEditScreen = ({navigation}: any) => {
  const {productStore} = useStore();
  const {avatarUrl, setAvatarUrl, name, setName, birthDate, setBirthDate} =
    productStore;
  const isDisabled = !name?.length || !avatarUrl?.length || !birthDate?.length;
  const dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];
  const handleSubmit = () => {
    navigation.navigate('Menu');
  };

  async function handlePickImage() {
    const result = await launchImageLibrary({mediaType: 'photo'});
    result.assets && setAvatarUrl(result.assets[0].uri);
  }

  function handleSave() {
    navigation.navigate('Menu');
  }

  return (
    <MyImageBg>
      <SafeAreaView edges={['top']} style={styles.container}>
        <View style={styles.topContainer}>
          <Pressable onPress={handlePickImage} style={{alignItems: 'center'}}>
            {avatarUrl ? (
              <ImageBackground source={{uri: avatarUrl}} style={styles.imageBg}>
                <Image
                  source={require('../assets/img_pick.png')}
                  style={{width: 64, height: 64}}
                />
              </ImageBackground>
            ) : (
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/img_pick.png')}
                  style={{width: 64, height: 64}}
                />
              </View>
            )}
            <Text style={styles.chooseIconText}>Choose an avatar</Text>
          </Pressable>
          <Formik
            initialValues={{
              name: '',
              email: '',
              subject: '',
              message: '',
            }}
            onSubmit={handleSubmit}>
            {({handleChange, handleSubmit, values, errors, touched}) => (
              <View style={styles.formContainer}>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter name"
                      placeholderTextColor={COLORS.grayText}
                      value={name}
                      onChangeText={setName}
                    />
                  </View>
                </View>

                <View style={styles.inputWrapper}>
                  <View style={styles.inputContainer}>
                    <MaskInput
                      mask={dateMask}
                      placeholder="DD.MM.YYYY"
                      style={styles.input}
                      placeholderTextColor={COLORS.grayText}
                      value={birthDate}
                      onChangeText={setBirthDate}
                      keyboardType={'number-pad'}
                    />
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
        <Pressable
          disabled={isDisabled}
          onPress={handleSave}
          style={[styles.editBtn, isDisabled && {opacity: 0.5}]}>
          <Text style={styles.btnTitle}>Save</Text>
        </Pressable>
      </SafeAreaView>
    </MyImageBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
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
    paddingTop: 10,
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
    alignItems: 'center',
    ...Platform.select({
      android: {
        paddingBottom: 20,
      },
    }),
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
    color: COLORS.transparentWhite,
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 4,
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
  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: COLORS.transparentBg,
    padding: 38,
  },
  chooseIconText: {
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.white,
    marginTop: 20,
  },
  imageBg: {
    width: 140,
    height: 140,
    borderRadius: 100,
    padding: 38,
    overflow: 'hidden',
  },
  button: {
    alignSelf: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  editBtn: {
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 12,
    alignSelf: 'flex-end',
    marginRight: 16,
  },
  btnTitle: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 600,
  },
});

export default observer(ProfileEditScreen);
