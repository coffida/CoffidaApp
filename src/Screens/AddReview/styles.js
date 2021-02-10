import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  splashStyle: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  buttonStyle: {
    margin: 10,
    backgroundColor: theme.colors.secondary,
    padding: 15,
    borderRadius: 10,
    // marginLeft:15,
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Input: {
    margin: 5,
    backgroundColor: '#E8F0FF',
    padding: 10,
    borderRadius: 10,
    width: '75%',
    fontSize: 12,
    fontFamily: Fonts.FontAwesome,
    // textAlign: 'center',
    // justifyContent:'center',
    alignSelf: 'center',
  },
  input: {
    margin: 5,
    // backgroundColor: '#E8F0FF',
    padding: 10,
    borderRadius: 10,
    width: '75%',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: Fonts.FontAwesome,
    // textAlign: 'center',
    // justifyContent:'center',
    alignSelf: 'center',
    borderWidth: 1,
  },
  backArrow: {
    height: 25,
    width: 25,

    borderRadius: 50,
    margin: 10,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width: '75%',
    alignSelf: 'center',
  },
  userImgStyle: {
    height: 95,
    width: 95,
    borderRadius: 3,
    alignSelf: 'center',
    // margin: 5,
  },
});
export default styles;
