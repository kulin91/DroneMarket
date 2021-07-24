import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({

  categoriesContainer: {
    marginTop: 32,
  },
  categoriesBox: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  chipItem: {
    backgroundColor: "#fafafa",
    height: 46,
    width: 78,
    borderRadius: 12,
    borderColor: '#E7E7E7',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textItem: {
    fontSize: 16,
    color: '#1F1F1F',
  },
  textCategory: {
    marginTop: 40,
    marginLeft: 16,
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 32
  }

});