import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {DrawerItems} from 'react-navigation-drawer';
import theme from '../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import OptionsMenu from 'react-native-options-menu';
import {more, logo} from '../../assets';
//redux
// import {connect} from 'react-redux';
// import {logoutUserSuccess} from '../../redux/actions/auth';
// import {Fonts} from '../../utils/';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Online',
      uname: 'Marriet Miles',
      isLoggingIn: false,
    };
  }
  componentDidMount = () => {
    // if (this.props.isLoggedIn) {
    //   this.setState(
    //     this.props.userData && {
    //       email: this.props.userData.email,
    //     },
    //   );
    // }
  };

  onLogOut = async () => {
    await this.props.logoutUserSuccess();
    if (this.props.isSuccess) {
      this.props.navigation.navigate('SignIn');
    } else {
      Alert('Something bad happened');
    }
  };

  render() {
    return (
      <SafeAreaView
        style={styles.mainContainer}
        forceInset={{top: 'always', horizontal: 'never'}}>
        {/* <ImageBackground
          style={styles.drawerHeaderContainer}
          resizeMode={'cover'}
          source={splash}> */}
        <View
          style={{
            height: Dimensions.get('window').height / 5,
            justifyContent: 'center',
            // alignItems: 'center',
          }}></View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.drawerItemsContainerStyle}>
          <DrawerItems {...this.props} />

          <View onPress={() => this.props.navigation.navigate('SignIn')}>
            <View style={styles.item}>
              <View style={styles.iconContainer}>
                <AntDesign name="logout" size={22} color={'#f1f1f1'} />
              </View>

              {/* {this.props.isLoggedIn ? (
                <TouchableOpacity onPress={this.onLogOut}>
                  <Text style={styles.label}>Log Out</Text>
                </TouchableOpacity>
              ) : ( */}
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('MainLogin')}>
                <Text style={styles.label}>Sign In</Text>
              </TouchableOpacity>
              {/* )} */}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FF613C',
  },
  drawerHeaderContainer: {
    height: Dimensions.get('window').height / 2.5,
    width: '100%',
  },
  drawerItemsContainerStyle: {
    flex: 0.6,
  },
  userIcon: {
    borderRadius: 20,
    alignItems: 'flex-end',
    height: 50,
    width: 50,
    marginLeft: 5,
  },
  largeText: {
    fontSize: 14,
    marginTop: 10,
    color: theme.colors.lightGray,
    marginLeft: 8,
    alignSelf: 'center',
  },
  logOutStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    margin: 18,
    fontSize: 14,
    color: '#f1f1f1',
    // fontFamily: Fonts.FontAwesome,
    padding: 4,
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    tintColor: 'orange',
    alignItems: 'center',
  },
  blurView: {
    // backgroundColor: 'rgba(52, 52, 52, 0.5)',
    flexDirection: 'row',
    marginBottom: 10,
  },
});
// const mapStateToProps = (state) => {
//   const {
//     status,
//     message,
//     userData,
//     isLoading,
//     isLoggedIn,
//     errMsg,
//     isSuccess,
//   } = state.auth;
//   return {status, message, userData, isLoading, isLoggedIn, errMsg, isSuccess};
// };
export default Content;
