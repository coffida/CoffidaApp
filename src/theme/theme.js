import {Platform} from 'react-native';

const theme = {
  colors: {
    primary: '#FCBF0A',
    secondary: '#4B4D51',
    tertiary: '#dd6d23',
    themeColor: '#a99175',
    fadeColor: '#c8c8c8',
    gray: '#676767',
    lightGray: '#EBEBEB',
    primaryDark: 'white',
    primaryLight: '#FF6565',
    redColor: '#FF2E2E',
    greenColor: '#00AF63',
    purpleColor: '#9E00B8',
  },
  Header: {
    backgroundColor: '#fff',
    statusBarProps: {
      barStyle: Platform.Os === 'android' ? 'light-content' : 'dark-content',
      translucent: true,
    },
  },
  Button: {
    raised: true,
    containerStyle: {marginVertical: 10},
    loadingProps: {size: 'large', color: '#a92533'},
    titleStyle: {color: 'white'},
    buttonStyle: {
      borderRadius: 20,
      backgroundColor: '#a92533',
    },
  },

  Text: {
    style: {
      fontSize: 16,
      padding: 5,
    },
  },
  dimens: {
    itemContainerPadding: 20,
  },
  SocialIcon: {
    style: {
      borderRadius: 5,
      paddingLeft: 30,
      paddingRight: 30,
    },
  },

  Input: {
    containerStyle: {
      marginVertical: 5,
      borderBottomWidth: 0,
    },
    borderBottomWidth: 0,
    placeholderTextColor: '#ADADAD',
    activeOpacity: 1,

    errorStyle: {textAlign: 'center', fontSize: 12},
    leftIconContainerStyle: {
      marginRight: 5,
    },
  },

  Icon: {
    size: 25,
    color: '#ADADAD',
  },
  CheckBox: {
    containerStyle: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
  },

  Picker: {
    itemStyle: {borderRadius: 1},
  },
  dividerStyle: {
    width: '90%',
    height: 1.5,
    color: '#707070',
  },
};

export default theme;
