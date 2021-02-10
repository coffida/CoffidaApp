import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: 'white',

    // marginTop: '10%',
  },
  checkbox: {backgroundColor: 'transparent', borderColor: 'transparent'},
  userImgStyle: {
    height: Dimensions.get('screen').height / 3,
    width: '100%',
    borderRadius: 8,
  },
  horizontalContainer: {flexDirection: 'row'},
  cardStyle: {
    flex: 1,
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#BDBDBD',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    // borderWidth: 1,
    borderColor: theme.colors.lightGray,
    borderRadius: 10,
  },
  largeText: {
    fontFamily: Fonts.FontAwesome,
    fontSize: 16,
    // width: '90%',
    color: theme.colors.gray,
    marginLeft: 5,
    // backgroundColor: 'skyblue',
  },
  bottomContainer: {
    // marginLeft: 5,
    padding: 5,
    marginTop: 5,
    flexDirection: 'row',
  },
  mediumText: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 12,
    alignSelf: 'center',
    marginLeft: 5,
  },
});
export default styles;
