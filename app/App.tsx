/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './navigators/AppNavigator.tsx';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StoreProvider} from './stores/StoreContext';
import {StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <StoreProvider>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </StoreProvider>
  );
}

export default App;
