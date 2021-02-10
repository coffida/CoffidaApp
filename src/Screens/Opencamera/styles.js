import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  imagebackground: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    // alignItems:'center',
    // justifyContent:'center'
  },
  largeText: {
    fontSize: 16,
    fontWeight: '300',
    color: 'tomato',
    marginTop: 5,
    alignSelf: 'center',
  },
  input: {
    margin: 5,
    // backgroundColor: '#e8f0ff',
    color: 'white',
    // paddingLeft: 10,
    borderBottomWidth: 2,
    borderColor: 'white',
    width: '75%',
    fontFamily: 'geometriaBold',

    // alignSelf: 'center',
    // textAlign: 'center',
    // justifyContent:'center',
    // alignItems:'center'
  },
  btn: {
    marginTop: 10,
    // marginLeft:'5%',
    // marginRight:'10%',
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 10,
    width: '35%',
    fontFamily: 'geometriaBold',
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export default styles;
