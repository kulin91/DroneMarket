import * as React from 'react';
import { View, ScrollView } from 'react-native';
import Item from '../Item/Item';
import { Good } from '../../hooks/useGoods';
import { style } from './style';

type Props = Readonly<{
  goods: Good[],
}>

export default function ItemContainer(props: Props) {

  const { goods } = props;

  return (
    <View style={style.containerForItem}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={style.viewScrollItem}>
        {goods.map((item) => <Item key={item._id} good={item} />)}
      </ScrollView>
    </View>
  );
};