import { useMemo, useState } from 'react';

export interface Good {
  _id: string;
  title: string;
  description: string;
  imgSrc: any;
  price: number;
  rating: number;
  speed: number;
  typeOf: string;
};

const goodsList: Good[] = [
  {
    _id: "1",
    title: "DJI Air 2S",
    description: "The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.",
    imgSrc: require("../assets/Air2S.png"),
    price: 1424,
    rating: 4.2,
    speed: 10,
    typeOf: "Ordinary",
  },
  {
    _id: "2",
    title: "DJI Mavic Mini",
    description: "The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.",
    imgSrc: require("../assets/MavicMini.png"),
    price: 990.90,
    rating: 4.5,
    speed: 8,
    typeOf: "Сheap",
  },
  {
    _id: "3",
    title: "DJI's Matrice 200",
    description: "The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.",
    imgSrc: require("../assets/Matrice200.png"),
    price: 2780.30,
    rating: 3.8,
    speed: 6,
    typeOf: "Professional",
  },
]

// useGoods mock http request

const categoriesFiltersConfig = [
  {
    name: "All",
    filter: (values: Good[]) => values
  },
  {
    name: "Cheap",
    filter: (values: Good[]) => {
      let min = values[0];
      for (let i = 0; i < values.length; i++) {
        if (values[i].price < min.price) min = values[i];
      }
      return [min];
    }
  },
  {
    name: "Best",
    filter: (values: Good[]) => values.filter(x => x.rating >= 4)
  },
  {
    name: "Fast",
    filter: (values: Good[]) => {
      let max = values[0];
      for (let i = 0; i < values.length; i++) {
        if (values[i].speed > max.speed) max = values[i];
      }
      return [max];
    }
  },
];

const categories = categoriesFiltersConfig.map(x => x.name);

export const useGoods = () => {
  const [selectedCategoryIndex, setSelectCategoryIndex] = useState(0);

  const goods = useMemo(() => {
    const config = categoriesFiltersConfig[selectedCategoryIndex];
    const result = config.filter(goodsList);
    return result;
  }, [selectedCategoryIndex]);

  return { goods, selectedCategoryIndex, setSelectCategoryIndex, categories };
};