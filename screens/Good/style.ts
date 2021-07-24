import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  buttonIcon: {
    color: '#1F1F1F',
    marginLeft: 10,
  },
  buttonContainer: {
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  inner: {
    height: 120,
    justifyContent: "space-around",
    margin: 20,
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    borderColor: "#E7E7E7",
    borderBottomWidth: 1,
    fontSize: 16,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#317AE8",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  safeAreaViewTop: {
    flex: 0,
    backgroundColor: '#ffffff'
  },
  safeAreaViewBottom: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  blurContainer: {
    height: "100%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1f1f1f65",
  },
  containerForUnblurPlatform: {
    height: 248,
    width: 343,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgBlur: {
    height: 52,
    width: 79,
    borderRadius: 20,
  },
  textApproved: {
    fontSize: 16,
    color: "#939399",
    marginBottom: 28,
    marginTop: 16
  },
  boxForButton: {
    alignItems: 'center',
    height: 46,
    width: 146,
    borderRadius: 8,
    backgroundColor: '#317AE8',
    justifyContent: 'center',
  },
  textButtonBack: {
    fontSize: 16,
    color: "#FFFFFF"
  },
  containerGood: {
    backgroundColor: "#ffffff"
  },
  containerImg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgGood: {
    height: 281,
    width: 343,
  },
  typeOfDron: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: 16,
    color: '#1F1F1F',
    marginTop: 24
  },
  textTitle: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F1F1F'
  },
  textPrice: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#317AE8',
    marginTop: 8,
    marginBottom: 12
  },
  textDescription: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: 16,
    color: '#939399'
  },
  containerButtonOrder: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  buttonOrder: {
    height: 46,
    width: 343,
    backgroundColor: "#317AE8",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
});