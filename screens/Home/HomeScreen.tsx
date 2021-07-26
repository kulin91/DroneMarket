// import * as React from 'react';
import React, { Fragment } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Advertising from '../../components/Advertising/Advertising';
import Categories from '../../components/Categories/Сategories';
import ItemContainer from '../../components/ItemContainer/ItemContainer';
import { useGoods } from '../../hooks/useGoods';

export default function Home() {

  const { goods, selectedCategoryIndex, setSelectCategoryIndex, categories } = useGoods();

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#F8F8F8' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8F8' }} >
        <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
          <ScrollView>
            <BurgerMenu />
            <Advertising />
            <Categories selectedCategoryIndex={selectedCategoryIndex} setSelectCategoryIndex={setSelectCategoryIndex} categories={categories} />
            <ItemContainer goods={goods} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

