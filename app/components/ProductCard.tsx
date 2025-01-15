import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import {useStore} from '../stores/StoreContext.tsx';
import CounterButton from './CounterButton.tsx';
import FastImage from 'react-native-fast-image';
import {observer} from 'mobx-react';

const ProductCard = ({item}: {item: Product}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  const handleAddToCart = () => {
    productStore.handlePlus(item);
  };

  return (
    <View style={styles.card}>
      <FastImage source={{uri: item.image}} style={styles.image} />
      <View style={styles.nameContainer}>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.oldPrice}>${item.oldPrice}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: '80%'}}>
          <View style={styles.header}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc} numberOfLines={2}>
              {item.description}
            </Text>
            <Text style={styles.weight} numberOfLines={2}>
              {item.calories}, {item.weight}
            </Text>
          </View>
        </View>
      </View>
      <View style={{alignContent: 'flex-end'}}>
        {quantity === 0 ? (
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        ) : (
          <CounterButton
            value={quantity}
            minus={() => handleMinus(item.id)}
            plus={() => handlePlus(item)}
          />
        )}
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    borderRadius: 16,
    flex: 1,
    marginBottom: 16,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: width / 2.6,
    borderRadius: 16,
  },
  header: {
    justifyContent: 'space-between',
    marginTop: 6,
    marginLeft: 10,
    height: width * 0.25,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
    marginTop: 5,
  },
  oldPrice: {
    color: COLORS.black,
    opacity: 0.5,
    marginTop: 5,
    marginLeft: 8,
    textDecorationLine: 'line-through',
  },
  name: {
    color: COLORS.black,
  },
  desc: {
    color: COLORS.black,
    fontWeight: '400',
  },
  details: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  counterContainer: {
    marginTop: 10,
  },
  addButton: {
    padding: 10,
    margin: 12,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
    color: COLORS.black,
  },
  icon: {
    width: 18,
    height: 18,
  },
  nameContainer: {
    paddingLeft: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cart: {
    width: 52,
    height: 52,
  },
  weight: {
    color: COLORS.grayText,
  },
});

export default observer(ProductCard);
