import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import theme from '../../theme';
import styles from './styles';
// import Snackbar from 'react-native-snackbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header, SearchBar, CheckBox, Card} from 'react-native-elements';
//redux
// import {connect} from 'react-redux';
// import {resetPassword} from '../../redux/actions/auth';

class AddReview extends Component {
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
      imageuri: '',
      review: '',
      txt: false,
      badwords: [{name: 'cake'}, {name: 'tea'}, {name: 'pastries'}],
      sentence: '',
      email: '',
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
  componentDidMount = () => {
    const imageuri = this.props.navigation.getParam('imageuri');
    console.log(imageuri);
    this.setState({imageuri});
  };
  searchUpdated() {
    const badwords = [{name: 'cakes'}, {name: 'tea'}, {name: 'pastries'}];

    const sentence = this.state.review;

    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (badwords.map((word) => word.name).includes(words[i])) {
        alert(
          'Sentence contain ' + words[i] + ' is not allowed in review. Thanks',
        );
      }
    }
  }
  onlogin() {
    console.log(this.state.email);
  }
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
              Add Review
            </Text>
          }
        />
        <ScrollView>
          <View
            style={{
              flex: 0.9,
              // backgroundColor: 'skyblue',
              justifyContent: 'center',
            }}>
            <TextInput
              style={styles.Input}
              placeholder="Enter Price Rating"
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
              placeholder="Enter Quality Rating"
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
              placeholder="Enter Cleanliness Rating"
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
            <TextInput
              style={styles.Input}
              placeholder="Enter Review"
              // autoCorrect={this.props.autoCorrect}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              keyboardType={'email-address'}
              placeholderTextColor="gray"
              value={this.state.review}
              underlineColorAndroid="transparent"
              onChangeText={(review) => {
                this.setState({review});
              }}
            />
            <Text style={styles.input}>
              ‘Tea’, ‘Cakes’ and ‘Pastries’ are not allowed in the review
            </Text>
            {this.state.imageuri ? (
              <ImageBackground
                source={{uri: this.state.imageuri}}
                style={{
                  borderRadius: 20,
                  // backgroundColor: 'skyblue',
                  justifyContent: 'flex-end',
                  transform: [{rotate: '180deg'}],
                  // padding: 2,
                  height: 90,
                  width: 90,

                  marginLeft: '15%',
                  // alignSelf: 'center',
                }}>
                <MaterialIcons
                  name="cancel"
                  size={20}
                  color="tomato"
                  onPress={() => this.setState({imageuri: ''})}
                />
              </ImageBackground>
            ) : (
              <View
                style={{
                  width: '75%',
                  // backgroundColor: 'skyblue',
                  alignSelf: 'center',
                  marginLeft: 15,
                }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{marginLeft: 13}}
                  onPress={() => this.props.navigation.navigate('Opencamera')}>
                  <Ionicons
                    name="ios-camera"
                    size={40}
                    color={theme.colors.primary}
                  />
                </TouchableOpacity>
                <Text style={styles.largeText}>Post Image</Text>
              </View>
            )}

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
              onPress={() => this.searchUpdated()}>
              <Text style={{color: 'white', fontSize: 16}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
export default AddReview;
