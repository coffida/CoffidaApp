import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: 'white',
  },
  filter: {
    backgroundColor: theme.colors.lightGray,
    margin: 5,
    elevation: 5,
    padding: 7,
    fontFamily: Fonts.FontAwesome,
    fontSize: 16,
    borderRadius: 5,
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  searchContainer: {
    backgroundColor: theme.colors.lightGray,
    // padding: 0,
  },
  inputStyle: {
    backgroundColor: 'white',
    elevation: 5,
    height: 40,
    width: '100%',
  },
  checkbox: {backgroundColor: 'transparent', borderColor: 'transparent'},
  userImgStyle: {
    height: 95,
    width: 95,
    borderRadius: 3,
    alignSelf: 'center',
    // margin: 5,
  },
  horizontalContainer: {flexDirection: 'row'},
  cardStyle: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#BDBDBD',
  },
});
export default styles;
