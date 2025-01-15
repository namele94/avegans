import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import FastImage from 'react-native-fast-image';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import CounterButton from './CounterButton.tsx';
import LinearView from './LinearView.tsx';

interface ItemViewProps {
  item: Product;
}

const CartItemView: React.FC<ItemViewProps> = ({item}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  return (
    <LinearView
      containerStyle={{
        borderRadius: 12,
        marginHorizontal: 10,
      }}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <FastImage
            source={{uri: item.image}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc} numberOfLines={2}>
              {item.description}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 2,
              }}>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.oldPrice}>${item.oldPrice}</Text>
            </View>
          </View>

          <View style={styles.actionsContainer}>
            <CounterButton
              isHorizontal
              value={quantity}
              plus={() => handlePlus(item)}
              minus={() => handleMinus(item.id)}
            />
          </View>
        </View>
      </View>
    </LinearView>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: '49%',
  },
  contentContainer: {
    width: '49%',
    height: 174,
    paddingLeft: 4,
    alignItems: 'flex-start',
  },
  image: {
    width: 179,
    height: 174,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  infoContainer: {
    paddingLeft: 10,
    paddingVertical: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
  },
  desc: {
    fontWeight: '400',
    color: COLORS.white,
    marginTop: 4,
  },
  price: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 20,
  },
  oldPrice: {
    color: COLORS.white,
    opacity: 0.5,
    fontWeight: '500',
    marginLeft: 8,
    textDecorationLine: 'line-through',
  },
  actionsContainer: {
    alignSelf: 'center',
  },
  subTotal: {
    fontWeight: '300',
    color: COLORS.black,
  },
});

export default observer(CartItemView);
