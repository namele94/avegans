import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores/StoreContext';
import COLORS from '../../styles/colors';
import CustomButton from '../../components/CustomButton.tsx';
import CartItemView from '../../components/CartItemView.tsx';
import MyImageBg from '../../components/MyImageBg.tsx';
import LinearView from '../../components/LinearView.tsx';
import ProductCard from '../../components/ProductCard.tsx';

const emptyIcon = require('../../assets/empty.png');
const CartScreen = ({navigation}: any) => {
  const {productStore} = useStore();
  const {cart, clearCart, cartDiscountAmount, cartTotal, addOrderList} =
    productStore;
  const isEmpty = cart.length === 0;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable style={styles.headerRight} onPress={clearCart}>
          <Image source={require('../../assets/remove.png')} />
        </Pressable>
      ),
    });
  }, []);

  const navigateToConfirmScreen = () => {
    addOrderList();
    navigation.navigate('Order');
  };
  const navigateToShop = () => {
    navigation.navigate('Shop');
  };

  if (cart.length === 0) {
    return (
      <MyImageBg>
        <EmptyCartView />
      </MyImageBg>
    );
  }

  return (
    <MyImageBg>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <View style={styles.container}>
          <FlatList
            numColumns={2}
            data={cart}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ProductCard item={item} />}
            contentContainerStyle={{paddingBottom: 100, paddingTop: 20}}
            ListFooterComponent={
              <View style={styles.footer}>
                <Text style={[styles.footerText, {opacity: 0.5}]}>
                  You have added {cart.length} position
                </Text>
                <Text style={styles.footerText}>
                  Total amount: ${cartTotal}
                </Text>
                <Text style={styles.footerText}>
                  Discount: {cartDiscountAmount}
                </Text>
              </View>
            }
          />
        </View>
        <View>
          <CustomButton
            onPress={isEmpty ? navigateToShop : navigateToConfirmScreen}
            title={isEmpty ? 'Add products' : 'Order'}
            containerStyle={{
              marginBottom: 40,
              marginTop: 20,
              alignSelf: 'center',
            }}
          />
        </View>
      </SafeAreaView>
    </MyImageBg>
  );
};

const EmptyCartView = () => {
  return (
    <View style={styles.emptyCartContainer}>
      <Image source={emptyIcon} style={styles.emptyIcon} />
      <Text style={styles.emptyCartText}>
        {'You have an empty shopping cart'}
      </Text>
      <Text style={styles.emptyCartSubText}>{'Add the first slot'}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'right',
  },
  removeText: {
    color: COLORS.error,
    textAlign: 'right',
  },
  emptyCartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartIcon: {
    width: 100,
    height: 100,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.white,
  },
  bottomContainer: {
    ...Platform.select({
      android: {
        paddingBottom: 20,
      },
    }),
    paddingTop: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
  },
  emptyCartText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 20,
  },
  emptyCartSubText: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.white,
    opacity: 0.5,
    fontWeight: '400',
    marginTop: 20,
  },
  emptyIcon: {
    width: 314,
    height: 314,
    marginTop: 50,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(5, 5, 5, 0.03)',
    paddingVertical: 10,
  },
  cartLengthText: {
    color: COLORS.black,
  },
  headerRight: {
    marginRight: 10,
  },
  headerRightTitle: {
    fontSize: 16,
  },
  cartHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 6,
  },
  cartHeaderTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  totalAmount: {
    color: COLORS.primary,
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 700,
    color: COLORS.white,
    marginBottom: 4,
  },
});

export default observer(CartScreen);
