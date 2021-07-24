import * as React from 'react';
import { Image, View, } from 'react-native';
import {style} from './style'

export default function Advertising() {
  return (
    <View style={style.advertisingContainer}>
<View style={{height: 164, width: 343, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require("../../assets/dron.png")} style={{ height: 164, width: 343, borderRadius: 20,}}/>
</View>
  </View>
  );
};