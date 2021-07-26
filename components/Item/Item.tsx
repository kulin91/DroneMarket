import * as React from 'react';
import { TouchableOpacity, View, Image, Text, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Good } from '../../hooks/useGoods';
import { style } from './style';

type Props = Readonly<{
  good: Good;
}>

export default function Item(props: Props) {

  const { good } = props;

  const navigation = useNavigation();

  const loadScreen = () => {
    navigation.navigate('Good', { good })
  }

  function isInteger(num: number) {
    return (num ^ 0) === num;
  }

  function price(value: number) {

    if (isInteger(value)) {
      return value;
    }
    return value.toFixed(2)
  }

  return (
    <TouchableOpacity onPress={loadScreen} style={style.itemContainer}
    >
      <Image source={good.imgSrc} style={{ height: 168, width: 202, }} />
      <Text style={style.itemTitle}>{good.title}</Text>
      <View style={style.itemBox}>
        <Text style={style.itemTextPrice}>{price(good.price)} $</Text>
        <View style={style.itemBoxForPriceAndRating}>
          <Ionicons style={style.buttonIcon} name="star" size={12} />
          <Text style={style.itemTextRating}>{good.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};