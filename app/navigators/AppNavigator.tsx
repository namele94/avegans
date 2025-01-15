import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CartStack from './stacks/CartStack.tsx';
import ReservationSuccessScreen from '../screens/ReservationSuccessScreen.tsx';
import MenuScreen from '../screens/MenuScreen.tsx';
import HomeScreen from '../screens/HomeScreen.tsx';
import ReservationScreen from '../screens/ReservationScreen.tsx';
import ContactScreen from '../screens/ContactScreen.tsx';
import LoaderScreen from '../screens/LoaderScreen.tsx';
import CustomHeader from '../components/CustomHeader.tsx';
import {View} from 'react-native';
import BonusesScreen from '../screens/BonusesScreen.tsx';
import ProfileScreen from '../screens/ProfileScreen.tsx';
import COLORS from '../styles/colors.ts';
import ProfileEditScreen from '../screens/ProfileEditScreen.tsx';

const Stack = createStackNavigator();

const DEFAULT_HEADER = {
  headerBackTitle: '',
  headerStyle: {backgroundColor: COLORS.primary},
  headerTintColor: COLORS.white,
  headerShadowVisible: false,
  headerTitleAlign: 'left',
  headerTitleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loader"
          component={LoaderScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          // @ts-ignore
          options={{
            ...DEFAULT_HEADER,
            headerLeft: () => null,
            title: "Let's get acquainted",
          }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEditScreen}
          // @ts-ignore
          options={{
            ...DEFAULT_HEADER,
            headerLeft: () => null,
            title: '',
          }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CartStack"
          component={CartStack}
          options={{
            headerShown: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Shop"
          component={HomeScreen}
          // @ts-ignore
        />
        <Stack.Screen
          name="Reservation"
          component={ReservationScreen}
          options={{
            header: () => (
              <CustomHeader title={'Reservation'} rightItem={<View />} />
            ),
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactScreen}
          options={{
            header: () => (
              <CustomHeader title={'Contacts'} rightItem={<View />} />
            ),
          }}
        />
        <Stack.Screen
          name="ReservationSuccessScreen"
          component={ReservationSuccessScreen}
          options={{
            header: () => <CustomHeader title={'Order'} rightItem={<View />} />,
            title: 'Reservation',
          }}
        />
        <Stack.Screen
          name="Bonuses"
          // @ts-ignore
          component={BonusesScreen}
          options={{
            header: () => (
              <CustomHeader title={'Bonuses'} rightItem={<View />} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
