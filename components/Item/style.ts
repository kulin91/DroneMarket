import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  buttonIcon: {
    color: '#F5D150',
    marginRight: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    height: 100,
    width: 100,
  },
  itemContainer: {
    overflow: 'hidden',
    height: 248,
    backgroundColor: '#ffffff',
    borderColor: '#E7E7E7',
    borderWidth: 1,
    width: 204,
    margin: 8,
    borderRadius: 12,
  },
  itemTitle: {
    marginLeft: 16,
    marginTop: 12,
    marginBottom: 12,
    fontWeight: 'bold',
    fontSize: 14
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemTextPrice: {
    marginLeft: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 16
  },
  itemBoxForPriceAndRating: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  itemTextRating: {
    marginRight: 19,
    marginBottom: 18,
    fontWeight: 'bold',
    fontSize: 14
  }
});