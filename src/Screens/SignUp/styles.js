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
  fieldContainer: {
    paddingVertical: 5,
    flex: 0.9,
  },
  largeText: {
    fontSize: 16,
    fontWeight: '300',
    padding: 5,
    fontFamily: Fonts.FontAwesome,
  },
  mediumText: {
    fontSize: 15,
    padding: 5,
    alignSelf: 'center',
    fontFamily: Fonts.FontAwesome,
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
  input: {
    margin: 8,
    backgroundColor: 'white',
    paddingLeft: 10,
    borderRadius: 10,
    width: '75%',
    fontFamily: Fonts.FontAwesome,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },

  buttonStyle: {
    margin: 5,
    backgroundColor: theme.colors.secondary,
    padding: 10,
    borderRadius: 10,
    fontFamily: Fonts.FontAwesome,
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default styles;
