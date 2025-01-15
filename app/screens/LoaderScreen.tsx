import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/MyImageBg.tsx';
import ProgressBar from '../components/ProgressBar.tsx';
import COLORS from '../styles/colors.ts';
import {BORDER_RADIUS} from '../styles/constants.ts';
import {useStore} from '../stores/StoreContext.tsx';

interface LoaderScreenProps {
  navigation: any;
}

const LoaderScreen: React.FC<LoaderScreenProps> = props => {
  const {productStore} = useStore();
  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate(productStore.name ? 'Menu' : 'Profile');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MyImageBg isLoader>
      <SafeAreaView edges={['bottom']} style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <Image
            source={require('../assets/appname.png')}
            style={{width: 260, height: 89}}
          />
        </View>
        <ProgressBar />
      </SafeAreaView>
    </MyImageBg>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    paddingTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: COLORS.white,
    padding: 24,
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS,
    marginBottom: 80,
  },
  title: {
    color: COLORS.primary,
    fontSize: 32,
    fontWeight: '700',
  },
  progressBar: {
    marginBottom: 60,
  },
});

export default observer(LoaderScreen);
