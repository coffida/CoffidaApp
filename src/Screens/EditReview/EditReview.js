import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import theme from '../../theme';
import styles from './styles';
// import Snackbar from 'react-native-snackbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, SearchBar, CheckBox, Card} from 'react-native-elements';
//redux
// import {connect} from 'react-redux';
// import {resetPassword} from '../../redux/actions/auth';

class EditReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      overall: '',
      quality: '',
      clean: '',
      name: '',
      img: '',
      islike: false,
    };
  }
  // onReset = async () => {
  //   const {pNo, password, confirmPassword} = this.state;

  //   const params = new FormData();

  //   params.append('phone_no', pNo);
  //   params.append('password', password);
  //   if (this.validateData()) {
  //     await this.props.resetPassword(params);
  //     if (this.props.isSuccess) {
  //       Snackbar.show({
  //         text: this.props.message,
  //         backgroundColor: theme.colors.primaryDark,
  //       });

  //       this.props.navigation.navigate('Login');
  //     } else {
  //       Snackbar.show({
  //         text: this.props.errMsg,
  //         backgroundColor: theme.colors.primaryDark,
  //       });
  //     }
  //   } else {
  //     return false;
  //   }
  // };
  // validateData = () => {
  //   const {pNo, password, confirmPassword} = this.state;
  //   if (pNo == '') {
  //     Snackbar.show({
  //       text: 'Kindly enter your registered phone no',
  //       duration: Snackbar.LENGTH_SHORT,
  //       backgroundColor: theme.colors.primaryDark,
  //     });
  //     return false;
  //   } else if (pNo.charAt(0) !== '+') {
  //     Snackbar.show({
  //       text: 'phone no must have country code e.g. +9212345678',
  //       duration: Snackbar.LENGTH_SHORT,
  //       backgroundColor: theme.colors.primaryDark,
  //     });
  //     return false;
  //   }
  //   if (password == '') {
  //     Snackbar.show({
  //       text: 'Kindly enter your new password',
  //       duration: Snackbar.LENGTH_SHORT,
  //       backgroundColor: theme.colors.primaryDark,
  //     });
  //     return false;
  //   }
  //   if (confirmPassword == '') {
  //     Snackbar.show({
  //       text: 'Kindly confirm password',
  //       duration: Snackbar.LENGTH_SHORT,
  //       backgroundColor: theme.colors.primaryDark,
  //     });
  //     return false;
  //   }

  //   if (confirmPassword == '') {
  //     Snackbar.show({
  //       text: 'Kindly confirm password',
  //       duration: Snackbar.LENGTH_SHORT,
  //       backgroundColor: theme.colors.primaryDark,
  //     });
  //     return false;
  //   } else {
  //     if (confirmPassword != password) {
  //       Snackbar.show({
  //         text: 'Passwords did not match',
  //         duration: Snackbar.LENGTH_SHORT,
  //         backgroundColor: theme.colors.primaryDark,
  //       });
  //       return false;
  //     } else {
  //       // return true;
  //       this.props.navigation.navigate('SignIn');
  //     }
  //   }
  // };
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header
          backgroundColor="skyblue"
          centerComponent={
            <Text
              style={{
                color: theme.colors.primaryDark,
                fontSize: 26,
                alignSelf: 'center',
              }}>
              Edit Review
            </Text>
          }
        />
        <View
          style={{
            flex: 0.9,
            // backgroundColor: 'skyblue',
            justifyContent: 'center',
          }}>
          <TextInput
            style={styles.Input}
            placeholder="Enter Review About Price"
            // autoCorrect={this.props.autoCorrect}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            keyboardType={'email-address'}
            placeholderTextColor="gray"
            value={this.state.price}
            underlineColorAndroid="transparent"
            onChangeText={(price) => {
              this.setState({price});
            }}
          />
          <TextInput
            style={styles.Input}
            placeholder="Enter Review About Quality"
            // autoCorrect={this.props.autoCorrect}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            keyboardType={'email-address'}
            placeholderTextColor="gray"
            value={this.state.quality}
            underlineColorAndroid="transparent"
            onChangeText={(quality) => {
              this.setState({quality});
            }}
          />
          <TextInput
            style={styles.Input}
            placeholder="Enter Review About Cleanliness"
            // autoCorrect={this.props.autoCorrect}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            keyboardType={'email-address'}
            placeholderTextColor="gray"
            value={this.state.clean}
            underlineColorAndroid="transparent"
            onChangeText={(clean) => {
              this.setState({clean});
            }}
          />
          <CheckBox
            title="Like"
            containerStyle={styles.checkbox}
            checked={this.state.islike}
            onPress={() =>
              this.setState({
                islike: !this.state.islike,
              })
            }
            // fontFamily={FontAwesome}
            checkedColor={theme.colors.secondary}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            // onPress={() => this.props.navigation.navigate('SignIn')}
          >
            <Text style={{color: 'white', fontSize: 16}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
// const mapStateToProps = (state) => {
//   const {isLoading, isSuccess, message, errMsg} = state.auth;
//   return {
//     isLoading,
//     isSuccess,
//     message,
//     errMsg,
//   };
// };
export default EditReview;
