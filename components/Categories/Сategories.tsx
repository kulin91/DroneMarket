import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { style } from './style';

type Props = Readonly<{
  selectedCategoryIndex: number,
  setSelectCategoryIndex: (index: number) => void,
  categories: string[],
}>

export default function Categories(props: Props) {
  const { selectedCategoryIndex, setSelectCategoryIndex, categories } = props;

  const colorActive = "#317AE8";
  const colorActiveFont = "#ffffff";

  return (
    <View style={style.categoriesContainer}>
      <View style={style.categoriesBox}>
        {categories.map((name, index) => (
          <TouchableOpacity key={name} onPress={() => setSelectCategoryIndex(index)} style={[style.chipItem, selectedCategoryIndex === index ? { backgroundColor: colorActive } : {}]}>
            <Text style={[style.textItem, selectedCategoryIndex === index ? { color: colorActiveFont } : {}]}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={style.textCategory}>{categories[selectedCategoryIndex]} Quadrocopters</Text>
    </View>
  );
};