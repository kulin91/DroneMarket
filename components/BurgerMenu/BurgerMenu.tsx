import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { style } from './style';




export default function BurgerMenu() {
  return (
    <View>
      <View style={style.burgerMenuBox}>
        <Text style={style.burgerMenuText}>Quadrojoy</Text>
        <View>
          <Ionicons style={style.buttonIcon} name="menu-outline" size={30} />
        </View>
      </View>
    </View>
  );
}