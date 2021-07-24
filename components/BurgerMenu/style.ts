import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  buttonIcon: {
    color: '#1F1F1F',
  },
  buttonContainer: {
    height: 100,
    width: 100,
  },
  burgerMenuBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: "5%",
    marginLeft: "5%"
  },
  burgerMenuText: {
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 32,
  }
});