import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { Good } from '../../hooks/useGoods';
import PhoneNumber from 'awesome-phonenumber';
import { style } from './style';



type RouterParams = Readonly<{ good: Good }>

export default function GoodScreen() {

  const [modalVisible, setModalVisible] = useState(false);

  const [input, setInput] = useState("");

  const onChangeText = (newValue: string) => {
    const phoneNumber = new PhoneNumber(newValue, "BY");
    setInput(phoneNumber.getNumber("international"));
  }


  const route = useRoute();
  const navigation = useNavigation();

  const { good } = route.params as RouterParams;

  const loadScene = () => {
    navigation.goBack()
  }

  function isInteger(num: number) {
    return (num ^ 0) === num;
  }

  function price(i: number) {

    if (isInteger(i)) {
      return i;
    }
    return i.toFixed(2)
  }

  return (

    <Fragment>
      <SafeAreaView style={style.safeAreaViewTop} />
      <SafeAreaView style={style.safeAreaViewBottom}>
        <KeyboardAwareScrollView>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
          >
            <BlurView intensity={65} tint="dark">
              <View style={style.blurContainer}>
                <View style={style.containerForUnblurPlatform}>
                  <Image source={require("../../assets/orderApproved.png")} style={style.imgBlur} />
                  <Text style={style.textApproved}>Ваш заказ принят</Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <View style={style.boxForButton}>
                      <Text style={style.textButtonBack}>Ок</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </BlurView>
          </Modal>
          <Pressable>
            <View style={style.containerGood}>
              <Ionicons onPress={loadScene} style={style.buttonIcon} name="chevron-back-outline" size={30} />
            </View>
            <View style={style.containerImg}>
              <Image source={good.imgSrc} style={style.imgGood} />
            </View>
            <Text style={style.typeOfDron}>{good.typeOf} quadrocopter</Text>
            <Text style={style.textTitle}>{good.title}</Text>
            <Text style={style.textPrice}>{price(good.price)} $</Text>
            <Text style={style.textDescription}>{good.description}</Text>
            <View style={style.inner}>
              <TextInput placeholderTextColor={"#939399"} placeholder="Имя" style={style.textInput} />
              <TextInput keyboardType="phone-pad" placeholderTextColor={"#1F1F1F"} value={input} onChangeText={onChangeText} placeholder="+375 (__) ___-__-__" style={style.textInput} />
            </View>
            <View style={style.containerButtonOrder}>
              <TouchableOpacity style={style.buttonOrder} onPress={() => setModalVisible(true)}>
                <Text style={{ color: "#ffffff" }}>Заказать</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </Fragment>
  )
}